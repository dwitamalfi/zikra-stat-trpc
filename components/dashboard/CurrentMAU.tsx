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

export default function CurrentMAU() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales 2023',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
      {
        label: 'Sales 2024',
        data: [75, 69, 90, 91, 66, 65, 50],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Sales Over Time',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sales',
        },
      },
    },
  };
  return (
    <div className="content-center h-full text-center">
      <div>
        <Line data={data} options={options} />
      </div>
      <span className="text-xl">Active User on Today</span>
    </div>
  );
}
