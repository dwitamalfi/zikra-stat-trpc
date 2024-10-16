"use client"

import { trpc } from "../../utils/trpc"

export default function Home() {
  const { data, isLoading, isFetching } = trpc.getUserList.useQuery({
    limit: 10,
    page: 1,
    key: null,
    startDate: null,
    endDate: null
  })

  const {
    data: dataTotal,
    isLoading: isLoadingTotal,
    isFetching: isFetchingTotal,
  } = trpc.getTotalUser.useQuery()

  if (isLoading || isFetching) return <p>Loading...</p>

  return (
    <>
      {data &&
        data.data.users.length > 1 &&
        data.data.users.map((item, index) => {
          return <span>{item.name}</span>
        })}
    </>
  )
}
