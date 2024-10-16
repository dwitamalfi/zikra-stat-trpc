"use client"

import React, { Key, useEffect, useState } from "react"
import { trpc } from "../../../../utils/trpc"
import "../styles.css"
import { ActivitySchema } from "../types/activity-schema"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRange } from "react-date-range"

const DemoPage = () => {
  const [activities, setActivities] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)

  const { data, isLoading, isFetching } = trpc.getAllActivity.useQuery(
    { limit: 100, page, key: "", startDate: null, endDate: null },
    {
      enabled: hasMore,
      onSuccess: (newData) => {
        setActivities((prev) => [...prev, ...newData.activities])
        console.log("new data " + newData.activities[0].id)
        console.log("Data saat ini " + activities)
        setHasMore(newData.hasMore)
        if (!newData.hasMore) {
          setPage(1)
        }
      },
    }
  )

  const loadMoreActivities = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1)
      setLoading(true)
    }
  }

  useEffect(() => {
    if (isFetching) {
      setLoading(false)
    }
  }, [isFetching])

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 500
      ) {
        loadMoreActivities()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [loadMoreActivities])

  return (
    <div>
      <h1>Activities</h1>

      {activities.map((activity) => (
        <ul key={activity.id}>
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
        </ul>
      ))}

      {isLoading && <p>Loading...</p>}
      {!hasMore && <p>No more activities to load.</p>}
    </div>
  )
}

export default DemoPage
