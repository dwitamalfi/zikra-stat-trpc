"use client"

import React, { Key, useEffect, useState } from "react"
import { trpc } from "../../../utils/trpc"
import "./styles.css"
import { ActivitySchema } from "./types/activity-schema"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRange } from "react-date-range"

const ActivitiesPage = () => {
  const [search, setSearch] = useState("")
  const [dateVisibile, setDateVisible] = useState(false)

  var myDate = new Date()
  myDate.setHours(0, 0, 0, 0)

  const [dateSelected, setDateSelected] = useState<{
    selection: { startDate: Date | undefined; endDate: Date | undefined; key: string }
  }>({
    selection: {
      startDate: myDate,
      endDate: myDate,
      key: "selection",
    },
  })

  const handleSelect = (ranges: any) => {
    setDateSelected({ selection: ranges.selection })
  }

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    trpc.getAllActivity.useInfiniteQuery(
      {
        limit: 20,
        key: search,
        startDate: dateSelected.selection.startDate || null,
        endDate: dateSelected.selection.endDate || null,
      },
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
      <div className='flex mb-4'>
        <input
          type='text'
          id='first_name'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mr-5 w-1/2'
          placeholder='Search Page'
          onChange={handleLiveSearch}
          value={search}
        />
        <div className='relative'>
          <button
            onClick={() => setDateVisible(!dateVisibile)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5'
          >
            {dateSelected.selection.endDate == null ||
            dateSelected.selection.startDate == null
              ? "Select Date"
              : `
              ${dateSelected.selection.startDate.toLocaleDateString()} - ${dateSelected.selection.endDate.toLocaleDateString()}`}
          </button>

          {dateVisibile && (
            <div className='absolute z-10 bg-white p-4 rounded-md shadow-lg'>
              <DateRange
                ranges={[dateSelected.selection]}
                onChange={handleSelect}
                className='bg-white'
              />
            </div>
          )}
        </div>
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
            {data?.pages != undefined &&
            data?.pages[0].activities.length > 0 ? (
              data!.pages.map((page: any, index: Key) => (
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

export default ActivitiesPage
