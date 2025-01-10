import { LocateIcon, Search } from "lucide-react";
import React, { useState } from "react";

export default function Banner() {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="bg-gray-50">
      <section className="relative w-[90%] lg:w-[85%] mx-auto pt-10 pb-7">
        <div className="relative z-10 lg:pt-11">
          <div className="z-40">
            <h1 className="text-gray-700 text-5xl font-semibold w-[60%]">
              Discover more than
            </h1>
            <h1 className="text-blue-400 text-5xl font-semibold">5000+ Jobs</h1>
            <img src="assets/images/signature.png" alt="" />
          </div>
          <p className="text-base text-gray-500 my-6 lg:w-[30%]">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>
        </div>
        <div className="relative z-20 bg-white py-3 px-4 lg:flex lg:gap-5 shadow-md lg:w-[73%]">
          <div className="flex gap-3 items-center">
            <div>
              <Search />
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Job title or keyword"
              className="bg-transparent w-full lg:w-[308px] p-2 outline-none"
            />
          </div>
          <div className="flex gap-3 items-center">
            <div>
              <LocateIcon />
            </div>
            <label htmlFor="options" className="sr-only">
              Location
            </label>
            <select
              id="options"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="p-2 rounded w-full outline-none lg:w-[308px] text-gray-600"
            >
              <option value="">Florence, Italy</option>
              <option value="option1">Lagos, Nigeria</option>
              <option value="option2">Bonx, USA</option>
              <option value="option3">Manchester, London</option>
            </select>
          </div>
          <button className="bg-blue-800 hover:bg-white hover:text-blue-700 hover:shadow-sm hover:border text-white p-2 w-full lg:w-[240px] mt-5 font-bold">
            Search my job
          </button>
        </div>
        <div className="mt-3 text-gray-600 text-base">
          <p>Popular :</p>
          <p>UI Designer, UX Researcher, Andriod, Admin</p>
        </div>
        <div>
          <img
            src="/assets/images/bg-img1.png"
            alt=""
            className="w-full absolute top-44 lg:top-0 z-0 lg:w-[80%] right-0 lg:h-[80%] md:h-[60%] object-cover"
          />
          <img
            src="/assets/images/bg-image.png"
            alt="image"
            className="absolute right-36 top-0 h-[60vh] hidden lg:flex"
          />
          <div
            className="w-[50%] h-[250px] bg-white hidden lg:block mx-auto absolute -right-28 -bottom-10"
            style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
          ></div>
        </div>
      </section>
    </div>
  );
}
