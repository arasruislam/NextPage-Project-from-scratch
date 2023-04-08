import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HiLightningBolt } from "react-icons/hi";

const Header = () => {
  return (
    <div className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-lx md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex items-center justify-between relative">
        {/* Logo section */}
        <Link to="/" className="inline-flex items-center">
          <HiLightningBolt className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            NextPage
          </span>
        </Link>

        {/* navItem section */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/books'
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
