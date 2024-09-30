"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { trpc } from "../../utils/trpc";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default function UserGrowth() {
  const { data, isLoading, isFetching } = trpc.getUserGrowth.useQuery();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let dataLabel;
  
  dataLabel = data?.data.user.map((item)=>{
    return item.bulan
  })

  let dataUser = data?.data.user.map((item)=>{return Number(item.count)})
  
  const datax = {
    labels: dataLabel?.map((item)=>{
      return monthNames[item-1]
    }),
    datasets: [
      {
        label: "User",
        data: dataUser,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
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
        text: "User Growth Chart",
      },
    },
  };
  return (
    <>
      <Bar data={datax} options={options} />
    </>
  );
}
