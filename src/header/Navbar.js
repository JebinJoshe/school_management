import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {

    const arrow = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5 mt-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    );


  return (
    <header className="bg-blue-900 text-white fixed text-lg top-0 w-full h-20 z-50  px-10">
      <nav className="flex justify-between items-center px-5 py-4">
        <div>
          <Link className="text-3xl font-bold text-white" to="/">
            KodeBloom
          </Link>
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <Link className="hover:bg-blue-700 px-3 py-2 rounded" to="/">
              Home
            </Link>
          </li>
          <li className="relative group">
            <span className="cursor-pointer flex gap-3 hover:bg-blue-700 px-3 py-2 rounded">
              About {arrow}
            </span>
            <ul className="absolute hidden group-hover:block bg-white text-blue-900 p-3 mt-0.5 shadow-lg rounded">
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/history">
                  History
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="#">
                  Our Inspiration
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="#">
                  Core Values
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="#">
                  Principal
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="#">
                  Annual Report
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="hover:bg-blue-700 px-3 py-2 rounded" to="/facilities">
              Facilities
            </Link>
          </li>
          <li>
            <Link className="hover:bg-blue-700 px-3 py-2 rounded" to="/department">
              Department
            </Link>
          </li>
          <li>
            <Link className="hover:bg-blue-700 px-3 py-2 rounded" to="/contact">
              Contact
            </Link>
          </li>
          <li className="relative group">
            <span className="cursor-pointer flex gap-2 hover:bg-blue-700 px-3 py-2 rounded">
              Login {arrow}
            </span>
            <ul className="absolute hidden group-hover:block bg-white text-blue-900 mt-0.5 shadow-lg rounded right-0 p-3">
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/login/student">
                  Parent/Student Login
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/login/teacher">
                  Teacher/Principal Login
                </Link>
              </li>
              <li>
                <Link className="block px-4 py-2 hover:bg-gray-100" to="/login/admin">
                  Admin Login
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
