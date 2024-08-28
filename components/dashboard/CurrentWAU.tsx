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

export default function CurrentWAU() {
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
        datasets: [
          {
            label: 'WAU (Weekly Active Users)',
            data: [5000, 5200, 4800, 5300, 5500, 5400, 5600],
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
            text: 'Weekly Active Users Over Time',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Weeks',
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
      <span className="text-xl">Active User on Today</span>
    </div>
  );
}
