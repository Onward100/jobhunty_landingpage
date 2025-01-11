import React from "react";
import { Link } from "react-router-dom";

export default function PostJobs() {
  return (
    <>
      <section className="bg-blue-700 px-10 sm:px-3 pt-24 sm:flex sm:pl-28 sm:w-[85%] mx-auto justify-between relative">
        <div
          className="w-[90px] h-[200px] sm:w-[200px] bg-white absolute -top-6 left-0"
          style={{
            clipPath: "polygon(0 0, 100% 10%, 0 100%)",
          }}
        ></div>
        <div className="text-white">
          <h1 className="mb-4 font-bold text-3xl sm:text-4xl sm:mt-11 sm:w-[250px]">
            Start posting jobs today
          </h1>
          <p className="mb-4">Start posting jobs for only $10</p>
          <Link href="#">
            <button className="bg-white transition duration-300 ease-in hover:-translate-x-2 font-bold text-blue-700 shadow-sm py-2 w-full sm:w-[160px]">
              Sign Up for free
            </button>
          </Link>
        </div>
        <div className="mt-7">
          <img
            src="/assets/images/dashboard.png"
            alt="image"
            className="w-full object-cover sm:relative sm:right-24"
          />
        </div>
        <div
          className="w-[150px] h-[60px] bg-white absolute right-0 bottom-0 sm:-right-20 md:-bottom-2"
          style={{
            clipPath: "polygon(0% 100%, 100% 100%, 50% 0%)",
          }}
        ></div>
      </section>
    </>
  );
}
