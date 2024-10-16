"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { trpc } from "../../../utils/trpc";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Usage() {
  const [dateVisibile, setDateVisible] = useState(false);
  const [dateSelected, setDateSelected] = useState<{
    selection: { startDate: Date | undefined; endDate: Date | undefined; key: string };
  }>({
    selection: {
      startDate: undefined,
      endDate:  undefined,
      key: "selection",
    },
  });

  // Define options for day, month, year and weekday in the desired format
  const optionsDate: Intl.DateTimeFormatOptions = { 
    weekday: 'long',  // Full name of the day: "long", "short", or "narrow"
    day: '2-digit',   // 2-digit day
    month: '2-digit', // 2-digit month
    year: 'numeric'   // Full numeric year
  };

  const {
    data: dataDaily,
    isLoading,
    isFetching,
  } = trpc.getAllUsage.useQuery({
    limit: 10,
    page: 1,
    key: null,
    startDate: dateSelected.selection.startDate || null,
    endDate: dateSelected.selection.endDate || null,
  });
  let dataLabel;

  dataLabel = dataDaily?.data.user.map((item) => {
    let dateStr = new Date(item.date).toLocaleDateString('id-ID', optionsDate);;
    return dateStr
  });
  let dataUser = dataDaily?.data.user.map((item) => {
    return Number(item.count);
  });

  const data = {
    labels: dataLabel,
    datasets: [
      {
        label: "DAU (Daily Active Users)",
        data: dataUser,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
        pointBackgroundColor: "rgba(75,192,192,1)",
        pointBorderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Daily Active Users Over the Week",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Day of the Week",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Users",
        },
        beginAtZero: true,
      },
    },
  };
  const handleSelect = (ranges: any) => {
    setDateSelected({ selection: ranges.selection });

    console.log("Start date " + dateSelected.selection.startDate);
    console.log("End date" + dateSelected.selection.endDate);
  };
  return (
    <div className="flex justify-center w-full max-w-full flex-row my-5">
      <div className="content-center text-center w-[60%]">
        <div className="relative">
          <button
            onClick={() => setDateVisible(!dateVisibile)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
          >
            {dateSelected.selection.endDate == null ||
            dateSelected.selection.startDate == null
              ? "Select Date"
              : `
              ${dateSelected.selection.startDate.toLocaleDateString()} - ${dateSelected.selection.endDate.toLocaleDateString()}`}
          </button>

          {dateVisibile && (
            <div className="absolute z-10 bg-white p-4 rounded-md shadow-lg">
              <DateRange
                ranges={[dateSelected.selection]}
                onChange={handleSelect}
                className="bg-white"
              />
              DateRange
            </div>
          )}
        </div>
        <div className="w-full">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
