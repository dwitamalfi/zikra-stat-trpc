import prisma from './../prisma/prisma-client';
import { TRPCError } from '@trpc/server';
import { CreateUserInput, FilterQueryInput } from './user-schema';

export const getUserList = async ({
  filterQuery,
}: {
  filterQuery: FilterQueryInput;
}) => {
  try {
    const { limit, page } = filterQuery;
    const take = limit || 10;
    const skip = (page - 1) * limit;

    const users = await prisma.mst_user.findMany({
      skip,
      take,
    });

    return {
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    };
  } catch (err: any) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: err.message,
    });
  }
};

export const getTotalUser = async () =>{
  try {
    const users = await prisma.mst_user.count({
      where: {
        deleted: 0,
      }
    })

    return {
      status: 'success',
      data: {
        users,
      },
    }
    
  } catch (err: any) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: err.message,
    });
  }
  return
}

export const getUserGrowth = async () => {
  type UserGrowthData = {
    bulan: number;
    count: number;
  }[];

  try {
    const user = await prisma.$queryRaw`
    SELECT 
      date_part('month', mu.created_at) AS bulan, 
      COUNT(mu.id) 
    FROM mst_user mu 
    WHERE mu.deleted = 0 
      AND date_part('year', mu.created_at) = '2024'
    GROUP BY date_part('month', mu.created_at)
  ` as UserGrowthData;

    return {
      status: 'success',
      data: {
        user ,
      },
    }
  } catch (err: any) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: err.message,
    });
  }
}
