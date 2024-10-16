import { prismaDb1, prismaDb2 } from "./../prisma/prisma-client"
import { TRPCError } from "@trpc/server"
import { FilterQueryInput } from "./user-schema"

export const getUserList = async ({
  filterQuery,
}: {
  filterQuery: FilterQueryInput
}) => {
  try {
    const { limit, page } = filterQuery
    const take = limit || 10
    const skip = (page - 1) * limit

    const users = await prismaDb1.mst_user.findMany({
      skip,
      take,
    })

    return {
      status: "success",
      results: users.length,
      data: {
        users,
      },
    }
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    })
  }
}

export const getTotalUser = async () => {
  try {
    const users = await prismaDb1.mst_user.count({
      where: {
        deleted: 0,
      },
    })

    return {
      status: "success",
      data: {
        users,
      },
    }
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    })
  }
  return
}

export const getUserGrowth = async () => {
  type UserGrowthData = {
    bulan: number
    count: number
  }[]

  try {
    const user = (await prismaDb1.$queryRaw`
    SELECT 
      date_part('month', mu.created_at) AS bulan, 
      COUNT(mu.id) 
    FROM mst_user mu 
    WHERE mu.deleted = 0 
      AND date_part('year', mu.created_at) = '2024'
    GROUP BY date_part('month', mu.created_at)
  `) as UserGrowthData

    return {
      status: "success",
      data: {
        user,
      },
    }
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    })
  }
}

export const getDailyUser = async () => {
  type dailyUser = {
    date: string
    count: number
  }[]

  const today = new Date()

  let month = today.getMonth() + 1
  let year = today.getFullYear()

  try {
    const user = (await prismaDb2.$queryRaw`
    SELECT * FROM (
     SELECT
        COUNT(distinct(tua.user_id))as count , 
        tua."date"
        from trx_user_activities tua 
        where date_part('month',tua."date") = ${month}
        and date_part('year',tua."date") = ${year}
        group by tua."date" 
        order by tua."date" desc
        limit 7
    ) tmp order by tmp.date asc  
    `) as dailyUser
    return {
      status: "success",
      data: {
        user,
      },
    }
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    })
  }
}

export const getAllActivity = async ({
  filterQuery,
}: {
  filterQuery: FilterQueryInput
}) => {
  try {
    const { limit, key, startDate, endDate, cursor, user_id } = filterQuery
    const take = limit || 10

    const finalEndDate = endDate
      ? new Date(new Date(endDate).setDate(new Date(endDate).getDate() + 1))
      : null

    const finalStartDate = startDate
      ? new Date(new Date(startDate).setDate(new Date(startDate).getDate() + 1))
      : null

    const where: any = {}

    if (user_id !== null) {
      where.user_id = user_id
    }

    if (key && key.trim()) {
      where.page = { contains: key }
    }

    if (startDate && finalEndDate) {
      where.date = { gte: finalStartDate, lte: finalEndDate }
    }

    const activities = await prismaDb2.trx_user_activities.findMany({
      take,
      where,
      orderBy: [{ created_at: "desc" }],
      ...(cursor && {
        cursor: {
          id: cursor,
        },
        skip: 1,
      }),
    })

    return {
      activities,
      hasMore: activities.length > 0 && activities.length === take,
      nextPage:
        activities.length > 0 ? activities[activities.length - 1].id : null,
    }
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    })
  }
}
