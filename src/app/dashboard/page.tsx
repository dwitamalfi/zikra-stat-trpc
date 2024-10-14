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
import CurrentMAU from "../../../components/dashboard/CurrentMAU";
import CurrentWAU from "../../../components/dashboard/CurrentWAU";

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
  // const atlte = athlete();
  // console.log("atlet",atlte);

  return (
    <>
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
          <CurrentWAU />
        </div>
        <div className="flex-1 border-right-here p-5">
          <CurrentMAU />
        </div>
      </div>
      <div className="gradient-fadeout-hr"></div>
    </>
  );
}
