import { TypeOf, date, number, object, string } from "zod"

export const filterQuery = object({
  limit: number().default(10),
  page: number().default(1),
  key: string().nullable(),
  startDate: date().nullable(),
  endDate: date().nullable(),
})

export type FilterQueryInput = TypeOf<typeof filterQuery>
