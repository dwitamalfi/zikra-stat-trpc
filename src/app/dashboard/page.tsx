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
import TotalCurrentUser from "../../../components/dashboard/TotalCurrentUser";
import UserGrowth from "../../../components/dashboard/UserGrowth";
import FeatureUsage from "../../../components/dashboard/FeatureUsage";
import CurrentDAU from "../../../components/dashboard/CurrentDAU";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [30, 20, 50, 60, 70, 90, 100],
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
        text: "Sales Chart",
      },
    },
  };
  return (
    <>
      <div className="flex">
        <div className="sidebar bg-[#273CA4] w-[80px] h-lvh hover:w-80 transition-width duration-300 ease-in-out shadow-[4px_7px_10px_0px_rgba(0,0,0,0.4)] z-[100] fixed"></div>
        <div className="main-content w-full p-10 pl-[120px]">
          <div className="flex justify-between w-full max-w-full flex-row my-5">
            <div className="flex-1 border-right-here p-5">
             <TotalCurrentUser />
            </div>
            <div className="flex-1 p-5 border-right-here">
               <UserGrowth />
            </div>
            <div className="flex-1 p-5">
               <FeatureUsage />
            </div>
          </div>
          <div className="gradient-fadeout-hr"></div>
          <div className="flex justify-between w-full max-w-full flex-row my-5">
            <div className="flex-1 border-right-here p-5">
              <CurrentDAU />
            </div>
            <div className="flex-1 border-right-here p-5">
              <CurrentDAU />
            </div>
            <div className="flex-1 border-right-here p-5">
              <CurrentDAU />
            </div>
            <div className="flex-1 p-5 border-right-here">
              <Bar data={data} options={options} />
            </div>
            <div className="flex-1 p-5">
              <Bar data={data} options={options} />
            </div>
          </div>
          <div className="gradient-fadeout-hr"></div>
        </div>
      </div>
    </>
  );
}
