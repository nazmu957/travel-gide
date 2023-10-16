import CustomSidebar from "@/components/UI/CustomSidebar";
import PastData from "@/components/UI/PastData";
import Table from "@/components/UI/Table";
import Link from "next/link";
import React from "react";

const UserDashboard = () => {
  return (
    <>
      <div className="navbar bg-blue-400">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">User Dashboard</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* main content */}

      <div className="flex">
        <CustomSidebar />
        <Table />
      </div>
    </>
  );
};

export default UserDashboard;
