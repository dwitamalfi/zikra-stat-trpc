import { TypeOf, any, date, number, object, string } from "zod"

export const createUserSchema = object({
  name: string({ required_error: "Name is required" }),
  email: string({ required_error: "Email is required" }).email("Invalid email"),
})

export const filterQuery = object({
  limit: number().default(10),
  cursor: string().nullish(),
  page: number().default(1),
  key: string().nullable(),
  startDate: date().nullable(),
  endDate: date().nullable(),
})

export type CreateUserInput = TypeOf<typeof createUserSchema>
export type FilterQueryInput = TypeOf<typeof filterQuery>
