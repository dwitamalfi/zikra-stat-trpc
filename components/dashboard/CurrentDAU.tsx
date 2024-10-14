"use client";
import React from "react";
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
import { trpc } from "../../utils/trpc";

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

export default function CurrentDAU() {
  const { data: dataDaily, isLoading, isFetching } = trpc.getDailyUser.useQuery();
  let dataLabel;

  dataLabel = dataDaily?.data.user.map((item)=>{
    let dateStr = new Date(item.date);
    const formattedDate = `${("0" + dateStr.getDate()).slice(-2)}-${("0" + (dateStr.getMonth() + 1)).slice(-2)}-${dateStr.getFullYear()}`;
    return formattedDate;
  })
  let dataUser = dataDaily?.data.user.map((item)=>{return Number(item.count)})
  
  const data = {
    labels: dataLabel,
    datasets: [
      {
        label: 'DAU (Daily Active Users)',
        data: dataUser,
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: 'rgba(75,192,192,1)',
      },
    ],
  };
  console.log("dataDaily",dataDaily);
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Daily Active Users Over the Week',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Day of the Week',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Users',
        },
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="content-center h-full text-center">
      <div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
