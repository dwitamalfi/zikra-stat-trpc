import React from "react"
import Link from "next/link"
import { ActivitySchema } from "../types/activity-schema"
import "../styles.css"

interface ActivitiesTableProps {
  data: any
  isLoading: boolean
  isFetchingNextPage: boolean
}

const ActivitiesTable: React.FC<ActivitiesTableProps> = ({
  data,
  isLoading,
  isFetchingNextPage,
}) => {
  if (isLoading) {
    return <p>Loading...</p>
  }

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
          {data?.pages != undefined && data?.pages[0].activities.length > 0 ? (
            data!.pages.map((page: any, index: React.Key) => (
              <React.Fragment key={index}>
                {page.activities.map((activity: ActivitySchema) => (
                  <tr key={activity.id}>
                    <td className='table-child'>
                      <Link
                        href={`/activities/${activity.user_id}`}
                        className='text-blue-500 hover:text-blue-700 underline'
                      >
                        {activity.email}
                      </Link>
                    </td>
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
      {isFetchingNextPage && <div>Loading more...</div>}
    </div>
  )
}

export default ActivitiesTable
