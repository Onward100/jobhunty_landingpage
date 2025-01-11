import { Dribbble, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);

    e.preventDefault();
  }
  return (
    <>
      <section className="bg-gray-800 px-4 py-7 mt-11">
        <main className="lg:flex justify-evenly">
          <div>
            <Link href="/">
              <div className="flex gap-2 items-center text-white">
                <img
                  src="/assets/icons/jobhunty.png"
                  alt="logo"
                  className="w-7 h-7"
                />
                <p className="text-xl font-semibold">JobHuntly</p>
              </div>
            </Link>
            <p className="text-gray-300 mt-4 w-[70%]">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>
          <div className="">
            <div className="flex my-6 justify-between md:justify-start md:gap-14 lg:-top-6 relative w-[70%] lg:w-full">
              <nav className="lg:relative lg:-left-32">
                <h1 className="text-white font-bold text-base">About</h1>
                <ul className="text-gray-300 mt-4">
                  <li className="mb-2">
                    <Link href="#">Companies</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#">Pricing</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#">Terms</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#">Advice</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </nav>

              <nav>
                <h1 className="text-white font-bold text-base">Resources</h1>
                <ul className="text-gray-300 mt-4">
                  <li className="mb-2">
                    <Link href="#">Help Docs</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#">Guide</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#">Update</Link>
                  </li>
                  <li className="mb-2">
                    <Link href="#">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div>
            <p className="text-white font-bold text-base mb-2">
              Get job notifications
            </p>
            <p className="text-gray-300 mb-3 w-[60%]">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form className="sm:flex sm:gap-2 items-start">
              <input
                type="email"
                value={inputValue}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full md:w-[50%] outline-none bg-white p-3 mb-2"
              />
              <button className="bg-blue-600 text-white transition duration-300 ease-in hover:bg-white hover:text-blue-600 font-bold py-2 sm:py-3  px-6">
                Subscribe
              </button>
            </form>
          </div>
        </main>
        <div className="lg:px-24">
          <div className="bg-gray-500 w-full h-[2px] my-5" />
          <div className="text-center sm:flex justify-between items-center md:items-baseline">
            <p className="text-gray-500">
              2021 @ JobHuntly. All rights reserved.
            </p>
            <div className="flex justify-center gap-2 mt-6">
              <div className="bg-gray-700 transition duration-300 ease-in hover:scale-75 rounded-full p-2 w-10 h-10 flex justify-center items-center">
                <Facebook color="white" size={20} />
              </div>
              <div className="bg-gray-700 transition duration-300 ease-in hover:scale-75 rounded-full p-2 w-10 h-10 flex justify-center items-center">
                <Instagram color="white" size={20} />
              </div>
              <div className="bg-gray-700 transition duration-300 ease-in hover:scale-75 rounded-full p-2 w-10 h-10 flex justify-center items-center">
                <Dribbble color="white" size={20} />
              </div>
              <div className="bg-gray-700 transition duration-300 ease-in hover:scale-75 rounded-full p-2 w-10 h-10 flex justify-center items-center">
                <Linkedin color="white" size={20} />
              </div>
              <div className="bg-gray-700 transition duration-300 ease-in hover:scale-75 rounded-full p-2 w-10 h-10 flex justify-center items-center">
                <Twitter color="white" size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
