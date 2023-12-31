
import AdminData from '@/components/UI/AdminData';
import CustomAdminSidebar from '@/components/UI/CustomAdminSidebar';
import Link from 'next/link';
import React from 'react';

const AdminDashboard = () => {
    return (
      <>
        <div>
          <div className="navbar bg-[#1F2937]">
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
                  <li className="text-white">
                    <Link className='text-white' href={"/"}>Home</Link>
                  </li>
                </ul>
              </div>
              <a className="btn btn-ghost normal-case text-xl text-white">
                Admin Dashboard
              </a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li className="text-white">
                  <Link className='text-white font-bold text-base' href={"/"}>Home</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex">
          <CustomAdminSidebar />
          <AdminData />
        </div>
      </>
    );
};

export default AdminDashboard;