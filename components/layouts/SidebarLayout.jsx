"use client";
import React from "react";
import { FaHome, FaUser, FaCog } from "react-icons/fa";
import { MdDashboard, MdDataUsage, MdOutlineQueryStats } from "react-icons/md";
import Link from "next/link"; // Import Link for declarative navigation

export default function SidebarLayout() {
  return (
    <div className="sidebar bg-[#2ec4b6] w-[80px] h-lvh hover:w-80 transition-width duration-300 ease-in-out shadow-[4px_7px_10px_0px_rgba(0,0,0,0.4)] z-[100] fixed">
      {/* Sidebar menu with icons and navigation */}
      <ul className="mt-8 list-none">
        <li className="text-white px-8 py-6 flex items-center space-x-4 overflow-hidden">
          <Link href="/dashboard" className="flex items-center space-x-4">
            <MdDashboard size={24} className="mr-5" />
            <span className="group-hover:block whitespace-nowrap text-xl">Dashboard</span>
          </Link>
        </li>
        <li className="text-white px-8 py-6 flex items-center space-x-4 overflow-hidden">
          <Link href="/activities" className="flex items-center space-x-4">
            <MdDataUsage size={24} className="mr-5" />
            <span className="group-hover:block whitespace-nowrap text-xl">Log Activities</span>
          </Link>
        </li>
        <li className="text-white px-8 py-6 flex items-center space-x-4  overflow-hidden">
          <Link href="/usage" className="flex items-center space-x-4">
            <MdOutlineQueryStats size={24} className="mr-5" />
            <span className="group-hover:block whitespace-nowrap text-xl">App Usage</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
