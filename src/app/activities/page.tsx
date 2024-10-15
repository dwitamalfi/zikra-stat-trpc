"use client"

import React, { useEffect } from "react"
import { trpc } from "../../../utils/trpc"
import "./styles.css"

const Page2 = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    trpc.getAllActivity.useInfiniteQuery(
      { limit: 20 },
      {
        getNextPageParam: (lastPage) => {
          return lastPage.hasMore ? lastPage.nextPage : undefined
        },
      }
    )

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  if (isLoading) return <div>Loading...</div>

  return (
    <div>
      <table className='table-style'>
        <thead>
          <tr>
            <th className='table-child'>Email</th>
            <th className='table-child'>Action</th>
            <th className='table-child'>Page</th>
            <th className='table-child'>Date</th>
            <th className='table-child'>Created At</th>
            <th className='table-child'>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.activities.map((activity) => (
                <tr key={activity.id}>
                  <td className='table-child'>{activity.email}</td>
                  <td className='table-child'>{activity.action}</td>
                  <td className='table-child'>{activity.page}</td>

                  <td className='table-child'>
                    {new Date(activity.date).toLocaleString()}
                  </td>
                  <td className='table-child'>
                    {new Date(activity.created_at).toLocaleString()}
                  </td>
                  <td className='table-child'>
                    {new Date(activity.updated_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      {isFetchingNextPage && <div>Loading more...</div>}
    </div>
  )
}

export default Page2
