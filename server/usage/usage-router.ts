
import { filterQuery } from "./usage-schema"
import { t } from "./../../utils/trpc-server"
import { getAllUsage } from "./usage-controller"

const usageRouter = t.router({
  getAllUsage: t.procedure
    .input(filterQuery)
    .query(({ input }) => getAllUsage({ filterQuery: input }))
})

export default usageRouter
