import { prismaDb1, prismaDb2 } from "./../../prisma/prisma-client";
import { TRPCError } from "@trpc/server";
import { FilterQueryInput } from "./usage-schema";

export const getAllUsage = async ({
  filterQuery,
}: {
  filterQuery: FilterQueryInput;
}) => {
  type dailyUser = {
    date: string;
    count: number;
  }[];

  const today = new Date();

  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  try {
    if (filterQuery.startDate && filterQuery.endDate) {
      const user = (await prismaDb2.$queryRaw`
            SELECT * FROM (
             SELECT
                COUNT(distinct(tua.user_id))as count , 
                tua."date"
                from trx_user_activities tua 
                where tua.date >= ${filterQuery.startDate} AND tua.date <= ${filterQuery.endDate}
                group by tua."date" 
                order by tua."date" desc
               ) tmp order by tmp.date asc  
            `) as dailyUser;
      return {
        status: "success",
        data: {
          user,
        },
      };
    } else {
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
            `) as dailyUser;
      return {
        status: "success",
        data: {
          user,
        },
      };
    }
  } catch (err: any) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: err.message,
    });
  }
};
