import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {/* Mobile first */}
      <nav className="flex items-center justify-between z-40 p-3 shadow-sm lg:hidden md:flex">
        <Link href="/">
          <div className="flex gap-2 items-center">
            <img
              src="/assets/icons/jobhunty.png"
              alt="logo"
              className="w-7 h-7"
            />
            <p className="text-base font-semibold">JobHuntly</p>
          </div>
        </Link>
        <div
          className="cursor-pointer"
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
        >
          <img src="/assets/icons/menu.png" alt="menu" />
        </div>
        {/* Dropdown menu */}
        {showMenu && (
          <div className="absolute bg-white w-[50%] text-right p-4 shadow-md right-2 top-16 z-40">
            <ul className="list-none">
              <li className="mb-2 text-gray-500 font-semibold hover:underline">
                <Link href="#">Find Jobs</Link>
              </li>
              <li className="text-gray-500 font-semibold hover:underline">
                <Link href="#">Browse Companies</Link>
              </li>
            </ul>
            <div className="flex flex-col mt-5">
              <Link href="#">
                <button className="bg-white mb-4 hover:bg-blue-700 hover:text-white transition-transform duration-300 shadow-md font-semibold text-blue-700 rounded-sm p-2 w-full">
                  Login
                </button>
              </Link>
              <Link href="#">
                <button className="bg-blue-700 hover:bg-white hover:text-blue-700 transition-transform duration-300 text-white font-semibold shadow-md rounded-sm p-2 w-full">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Desktop */}
      <nav className="hidden items-center z-40 justify-between py-3 px-28 shadow-sm lg:flex md:hidden">
        <div className="flex items-center gap-6">
          <Link href="/">
            <div className="flex gap-2 items-center">
              <img
                src="/assets/icons/jobhunty.png"
                alt="logo"
                className="w-5 h-5"
              />
              <p className="text-xl font-semibold">JobHuntly</p>
            </div>
          </Link>
          <ul className="list-none flex items-center gap-5">
            <li className=" text-gray-500 font-semibold hover:underline">
              <Link href="#">Find Jobs</Link>
            </li>
            <li className="text-gray-500 font-semibold hover:underline">
              <Link href="#">Browse Companies</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          <Link href="#">
            <button className="bg-white mb-4 hover:bg-blue-700 hover:text-white transition-transform duration-300 shadow-md font-semibold text-blue-700 rounded-sm p-2 w-[108px]">
              Login
            </button>
          </Link>
          <Link href="#">
            <button className="bg-blue-700 hover:bg-white hover:text-blue-700 transition-transform duration-300 text-white font-semibold shadow-md rounded-sm p-2 w-[108px]">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
