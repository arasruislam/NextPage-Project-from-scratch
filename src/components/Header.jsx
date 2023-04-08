import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiLightningBolt, HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About Us
            </NavLink>
          </li>
        </ul>

        {/* Mobile navbar section */}
        <div className="lg:hidden">
          {/* Dropdown open button */}
          <button
            aria-label="Open Menu"
            title="open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiMenuAlt3 className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between relative">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <HiLightningBolt className="h-6 w-6 text-blue-500" />
                      <span className="ml-2 text-2xl font-bold tracking-wide text-gray-800">
                        NextPage
                      </span>
                    </Link>
                  </div>
                  {/* Navbar Close Button */}
                  <div>
                    <button
                      aria-label="Open Menu"
                      title="open menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <HiX className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* navItem section */}
                <nav className="mt-4">
                  <ul className="space-y-4">
                    <li>
                      <NavLink to="/" className="default">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/books" className="default">
                        Books
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about" className="default">
                        About Us
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
