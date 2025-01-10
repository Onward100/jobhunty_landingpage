import { ArrowRight, Dot } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function LatestJobs() {
  return (
    <>
      <main className=" bg-gray-100">
        <section className="w-[85%] mx-auto pt-11">
          <div className="justify-between items-center flex mb-5">
            <div className="font-bold text-4xl">
              <span className="text-gray-800">Latest</span>
              <span className="text-blue-400">jobs open</span>
            </div>
            <Link href="#">
              <div className="text-purple-500 sm:flex hidden items-center gap-3 mt-4">
                Show all jobs
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>
          <div className="lg:grid lg:grid-cols-2 gap-4">
            <div className="bg-white p-3 sm:flex sm:items-start gap-3 mb-3 transition duration-300 ease-in hover:scale-105 cursor-pointer">
              <img
                src="/assets/icons/nomad.png"
                alt="nomad"
                className="w-[40px] mb-2 sm:w-[50px]"
              />
              <div>
                <h1 className="text-gray-700 font-bold text-xl">
                  Social Media Assistant
                </h1>
                <div className="flex items-center gap-2 my-3 text-gray-600">
                  <span>Nomad</span>
                  <Dot />
                  <span>Paris</span>
                  <Dot />
                  <span>France</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-customGreen rounded-full bg-gray-200 p-2">
                    Full Time
                  </button>
                  <button className="text-orange-400 border border-orange-400 rounded-full p-2">
                    Marketing
                  </button>
                  <button className="text-blue-800 border border-blue-800 rounded-full p-2">
                    Design
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 sm:flex sm:items-start gap-3 mb-3 transition duration-300 ease-in hover:scale-105 cursor-pointer">
              <img
                src="/assets/icons/design.png"
                alt="nomad"
                className="w-[40px] mb-2 sm:w-[50px]"
              />
              <div>
                <h1 className="text-gray-700 font-bold text-xl">
                  Brand Designer
                </h1>
                <div className="flex items-center gap-2 my-3 text-gray-600">
                  <span>Dropbox</span>
                  <Dot />
                  <span>San Fransisco</span>
                  <Dot />
                  <span>USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-orange-600 rounded-full bg-orange-100 p-2">
                    Full Time
                  </button>
                  <button className="text-blue-800 border border-blue-800 rounded-full p-2">
                    Design
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 sm:flex sm:items-start gap-3 mb-3 transition duration-300 ease-in hover:scale-105 cursor-pointer">
              <img
                src="/assets/icons/dev.png"
                alt="nomad"
                className="w-[40px] mb-2 sm:w-[50px]"
              />
              <div>
                <h1 className="text-gray-700 font-bold text-xl">
                  Interactive Designer
                </h1>
                <div className="flex items-center gap-2 my-3 text-gray-600">
                  <span>Terraform</span>
                  <Dot />
                  <span>Hamburg</span>
                  <Dot />
                  <span>Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-orange-400 rounded-full bg-gray-100 p-2">
                    Full Time
                  </button>
                  <button className="text-blue-800 border border-blue-800 rounded-full p-2">
                    Design
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 sm:flex sm:items-start gap-3 mb-3 transition duration-300 ease-in hover:scale-105 cursor-pointer">
              <img
                src="/assets/icons/hr2.png"
                alt="nomad"
                className="w-[40px] mb-2 sm:w-[50px]"
              />
              <div>
                <h1 className="text-gray-700 font-bold text-xl">HR Manager</h1>
                <div className="flex items-center gap-2 my-3 text-gray-600">
                  <span>Packer</span>
                  <Dot />
                  <span>Lucern</span>
                  <Dot />
                  <span>Switzerland</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-customGreen rounded-full bg-gray-200 p-2">
                    Full Time
                  </button>
                  <button className="text-orange-400 border border-orange-400 rounded-full p-2">
                    Marketing
                  </button>
                  <button className="text-blue-800 border border-blue-800 rounded-full p-2">
                    Management
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 sm:flex sm:items-start gap-3 mb-3 transition duration-300 ease-in hover:scale-105 cursor-pointer">
              <img
                src="/assets/icons/brand2.png"
                alt="nomad"
                className="w-[40px] mb-2 sm:w-[50px]"
              />
              <div>
                <h1 className="text-gray-700 font-bold text-xl">
                  Brand Designer
                </h1>
                <div className="flex items-center gap-2 my-3 text-gray-600">
                  <span>Netlify</span>
                  <Dot />
                  <span>San Fransisco</span>
                  <Dot />
                  <span>France</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-customGreen rounded-full bg-gray-200 p-2">
                    Full Time
                  </button>
                  <button className="text-orange-400 border border-orange-400 rounded-full p-2">
                    Marketing
                  </button>
                  <button className="text-blue-700 border border-blue-700 rounded-full p-2">
                    Design
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 sm:flex sm:items-start gap-3 mb-3 transition duration-300 ease-in hover:scale-105 cursor-pointer">
              <img
                src="/assets/icons/assistance.png"
                alt="nomad"
                className="w-[40px] mb-2 sm:w-[50px]"
              />
              <div>
                <h1 className="text-gray-700 font-bold text-xl">
                  Social Media Assistant
                </h1>
                <div className="flex items-center gap-2 my-3 text-gray-600">
                  <span>Netlify</span>
                  <Dot />
                  <span>Paris</span>
                  <Dot />
                  <span>France</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-customGreen rounded-full bg-gray-200 p-2">
                    Full Time
                  </button>
                  <button className="text-orange-400 border border-orange-400 rounded-full p-2">
                    Marketing
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 sm:flex sm:items-start gap-3 mb-3 transition duration-300 ease-in hover:scale-105 cursor-pointer">
              <img
                src="/assets/icons/nomad.png"
                alt="nomad"
                className="w-[40px] mb-2 sm:w-[50px]"
              />
              <div>
                <h1 className="text-gray-700 font-bold text-xl">
                  Social Media Assistant
                </h1>
                <div className="flex items-center gap-2 my-3 text-gray-600">
                  <span>Nomad</span>
                  <Dot />
                  <span>Paris</span>
                  <Dot />
                  <span>France</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-customGreen rounded-full bg-gray-200 p-2">
                    Full Time
                  </button>
                  <button className="text-orange-400 border border-orange-400 rounded-full p-2">
                    Marketing
                  </button>
                  <button className="text-blue-800 border border-blue-800 rounded-full p-2">
                    Design
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 sm:flex sm:items-start gap-3 mb-3 transition duration-300 ease-in hover:scale-105 cursor-pointer">
              <img
                src="/assets/icons/hr.png"
                alt="nomad"
                className="w-[40px] mb-2 sm:w-[50px]"
              />
              <div>
                <h1 className="text-gray-700 font-bold text-xl">
                  Social Media Assistant
                </h1>
                <div className="flex items-center gap-2 my-3 text-gray-600">
                  <span>Maze</span>
                  <Dot />
                  <span>Paris</span>
                  <Dot />
                  <span>USA</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-customGreen rounded-full bg-gray-200 p-2">
                    Full Time
                  </button>
                  <button className="text-orange-400 border border-orange-400 rounded-full p-2">
                    Marketing
                  </button>
                  <button className="text-blue-800 border border-blue-800 rounded-full p-2">
                    Design
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
