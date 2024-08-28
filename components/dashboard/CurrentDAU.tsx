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

export default function CurrentDAU() {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'DAU (Daily Active Users)',
        data: [1200, 1500, 1100, 1600, 1700, 1400, 1300],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
        pointBackgroundColor: 'rgba(75,192,192,1)',
        pointBorderColor: 'rgba(75,192,192,1)',
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
