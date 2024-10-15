"use client"

import React, { Key, useEffect, useState } from "react"
import { trpc } from "../../../utils/trpc"
import "./styles.css"
import { ActivitySchema } from "./types/activity-schema"

const Page2 = () => {
  const [search, setSearch] = useState("")

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    trpc.getAllActivity.useInfiniteQuery(
      { limit: 20, key: search },
      {
        getNextPageParam: (lastPage: any) => {
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

  const handleLiveSearch = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value
    setSearch(newValue)
  }

  return (
    <div>
      <div className='flex justify-between mb-4'>
        <input
          type='text'
          id='first_name'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mr-10 w-1/2'
          placeholder='Search Page'
          onChange={handleLiveSearch}
          value={search}
          required
        />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
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
            {data?.pages[0].activities.length > 0 ? (
              data.pages.map((page: any, index: Key) => (
                <React.Fragment key={index}>
                  {page.activities.map((activity: ActivitySchema) => (
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
              ))
            ) : (
              <tr>
                <td colSpan={6} className='table-child text-center'>
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
      {isFetchingNextPage && <div>Loading more...</div>}
    </div>
  )
}

export default Page2
