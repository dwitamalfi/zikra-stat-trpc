"use client"

import React, { useEffect, useState } from "react"
import { trpc } from "../../../../utils/trpc"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { useParams } from "next/navigation"
import ActivitiesTable from "../components/ActivitiesTable"
import FilterActivity from "../components/FilterActivity"

const ActivitiesPage = () => {
  const [search, setSearch] = useState("")
  const [dateVisibile, setDateVisible] = useState(false)
  const { user_id } = useParams()

  var myDate = new Date()
  myDate.setHours(0, 0, 0, 0)

  const [dateSelected, setDateSelected] = useState<{
    selection: {
      startDate: Date | undefined
      endDate: Date | undefined
      key: string
    }
  }>({
    selection: {
      startDate: myDate,
      endDate: myDate,
      key: "selection",
    },
  })

  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    trpc.getAllActivity.useInfiniteQuery(
      {
        limit: 20,
        key: search,
        user_id: user_id.toString(),
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

  return (
    <>
      <FilterActivity
        dateSelected={dateSelected}
        dateVisible={dateVisibile}
        search={search}
        setDateSelected={setDateSelected}
        setDateVisible={setDateVisible}
        setSearch={setSearch}
      />
      <ActivitiesTable
        data={data}
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  )
}

export default ActivitiesPage
