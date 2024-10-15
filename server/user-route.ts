import { filterQuery } from "./user-schema"
import {
  getAllActivity,
  getDailyUser,
  getTotalUser,
  getUserGrowth,
  getUserList,
} from "./user-controller"
import { t } from "./../utils/trpc-server"

const userRouter = t.router({
  getUserList: t.procedure
    .input(filterQuery)
    .query(({ input }) => getUserList({ filterQuery: input })),
  getTotalUser: t.procedure.query(() => getTotalUser()),
  getUserGrowth: t.procedure.query(() => getUserGrowth()),
  getDailyUser: t.procedure.query(() => getDailyUser()),
  getAllActivity: t.procedure
    .input(filterQuery)
    .query(({ input }) => getAllActivity({ filterQuery: input })),
})

export default userRouter
