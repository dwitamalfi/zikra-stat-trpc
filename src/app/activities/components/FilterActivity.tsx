import React from "react"
import { DateRange } from "react-date-range"

interface FilterActivityProps {
  search: string
  setSearch: (value: string) => void
  dateSelected: {
    selection: {
      startDate: Date | undefined
      endDate: Date | undefined
      key: string
    }
  }
  setDateSelected: (date: {
    selection: {
      startDate: Date | undefined
      endDate: Date | undefined
      key: string
    }
  }) => void
  dateVisible: boolean
  setDateVisible: (visible: boolean) => void
}

const FilterActivity: React.FC<FilterActivityProps> = ({
  search,
  setSearch,
  dateSelected,
  setDateSelected,
  dateVisible,
  setDateVisible,
}) => {
  const handleLiveSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setSearch(newValue)
  }

  const handleSelect = (ranges: any) => {
    setDateSelected({ selection: ranges.selection })
  }

  return (
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
          onClick={() => setDateVisible(!dateVisible)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5'
        >
          {dateSelected.selection.endDate == null ||
          dateSelected.selection.startDate == null
            ? "Select Date"
            : `${dateSelected.selection.startDate.toLocaleDateString()} - ${dateSelected.selection.endDate.toLocaleDateString()}`}
        </button>

        {dateVisible && (
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
  )
}

export default FilterActivity
