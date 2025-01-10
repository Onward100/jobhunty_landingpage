import {
  ArrowRight,
  Briefcase,
  Code,
  CreditCard,
  Megaphone,
  Monitor,
  Ruler,
  Signal,
  Users,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function JobCategory() {
  return (
    <>
      <section className="w-[90%] md:w-[85%] mx-auto my-11">
        <div className="justify-between items-center flex mb-5">
          <div className="font-bold text-4xl">
            <span className="text-gray-800">Exploreby</span>
            <span className="text-blue-400">category</span>
          </div>
          <Link href="#">
            <div className="text-purple-500 sm:flex hidden items-center gap-2 mt-4">
              Show all jobs
              <ArrowRight size={18} />
            </div>
          </Link>
        </div>
        {/*Job Category*/}
        <main className="md:grid md:grid-cols-4 gap-4">
          <div className="group sm:w-full hover:bg-blue-700 border mb-3 transition duration-300 ease-in-out shadow p-3 flex sm:block items-center justify-between cursor-pointer">
            <div>
              <Ruler className="text-blue-700 group-hover:text-white transition duration-300 ease-in-out" />
            </div>
            <div className="md:flex items-end justify-between">
              <div>
                <p className="text-gray-800 md:my-2 font-bold group-hover:text-white transition duration-300 ease-in-out">
                  Design
                </p>
                <p className="text-gray-500 font-semibold group-hover:text-white transition duration-300 ease-in-out">
                  255 jobs available
                </p>
              </div>
              <ArrowRight className="group-hover:text-white hidden md:block" />

            </div>
              <ArrowRight className="group-hover:text-white sm:hidden block" />
          </div>

          <div className="group sm:block sm:w-full hover:bg-blue-700 border mb-3 transition duration-300 ease-in-out shadow p-3 flex items-center justify-between cursor-pointer">
            <div>
              <Signal className="text-blue-700 group-hover:text-white transition duration-300 ease-in-out" />
            </div>
            <div className="md:flex items-end justify-between">
              <div>
                <p className="text-gray-800 md:my-2 font-bold group-hover:text-white transition duration-300 ease-in-out">
                  Sales
                </p>
                <p className="text-gray-500 font-semibold group-hover:text-white transition duration-300 ease-in-out">
                  756 jobs available
                </p>
              </div>
              <ArrowRight className="group-hover:text-white hidden md:block" />

            </div>
              <ArrowRight className="group-hover:text-white sm:hidden block" />
          </div>

          <div className="group sm:block sm:w-full hover:bg-blue-700 border mb-3 transition duration-300 ease-in-out shadow p-3 flex items-center justify-between cursor-pointer">
            <div>
              <Megaphone className="text-blue-700 group-hover:text-white transition duration-300 ease-in-out" />
            </div>
            <div className="md:flex items-end justify-between">
              <div>
                <p className="text-gray-800 md:my-2 font-bold group-hover:text-white transition duration-300 ease-in-out">
                  Marketing
                </p>
                <p className="text-gray-500 font-semibold group-hover:text-white transition duration-300 ease-in-out">
                  140 jobs available
                </p>
              </div>
              <ArrowRight className="group-hover:text-white hidden md:block" />

            </div>
              <ArrowRight className="group-hover:text-white sm:hidden block" />
          </div>

          <div className="group sm:block sm:w-full hover:bg-blue-700 border mb-3 transition duration-300 ease-in-out shadow p-3 flex items-center justify-between cursor-pointer">
            <div>
              <CreditCard className="text-blue-700 group-hover:text-white transition duration-300 ease-in-out" />
            </div>
            <div className="md:flex items-end justify-between">
              <div>
                <p className="text-gray-800 md:my-2 font-bold group-hover:text-white transition duration-300 ease-in-out">
                  Finance
                </p>
                <p className="text-gray-500 font-semibold group-hover:text-white transition duration-300 ease-in-out">
                  325 jobs available
                </p>
              </div>
              <ArrowRight className="group-hover:text-white hidden md:block" />

            </div>
              <ArrowRight className="group-hover:text-white sm:hidden block" />
          </div>

          <div className="group sm:block sm:w-full hover:bg-blue-700 border mb-3 transition duration-300 ease-in-out shadow p-3 flex items-center justify-between cursor-pointer">
            <div>
              <Monitor className="text-blue-700 group-hover:text-white transition duration-300 ease-in-out" />
            </div>
            <div className="md:flex items-end justify-between">
              <div>
                <p className="text-gray-800 md:my-2 font-bold group-hover:text-white transition duration-300 ease-in-out">
                  Tecnology
                </p>
                <p className="text-gray-500 font-semibold group-hover:text-white transition duration-300 ease-in-out">
                  436 jobs available
                </p>
              </div>
              <ArrowRight className="group-hover:text-white hidden md:block" />
              
            </div>
              <ArrowRight className="group-hover:text-white sm:hidden block" />
          </div>

          <div className="group sm:block sm:w-full hover:bg-blue-700 border mb-3 transition duration-300 ease-in-out shadow p-3 flex items-center justify-between cursor-pointer">
            <div>
              <Code className="text-blue-700 group-hover:text-white transition duration-300 ease-in-out" />
            </div>
            <div className="md:flex items-end justify-between">
              <div>
                <p className="text-gray-800 md:my-2 font-bold group-hover:text-white transition duration-300 ease-in-out">
                  Engineering
                </p>
                <p className="text-gray-500 font-semibold group-hover:text-white transition duration-300 ease-in-out">
                  542 jobs available
                </p>
              </div>
              <ArrowRight className="group-hover:text-white hidden md:block" />

            </div>
              <ArrowRight className="group-hover:text-white sm:hidden block" />
          </div>

          <div className="group sm:block sm:w-full hover:bg-blue-700 border mb-3 transition duration-300 ease-in-out shadow p-3 flex items-center justify-between cursor-pointer">
            <div>
              <Briefcase className="text-blue-700 group-hover:text-white transition duration-300 ease-in-out" />
            </div>
            <div className="md:flex items-end justify-between">
              <div>
                <p className="text-gray-800 md:my-2 font-bold group-hover:text-white transition duration-300 ease-in-out">
                  Business
                </p>
                <p className="text-gray-500 font-semibold group-hover:text-white transition duration-300 ease-in-out">
                  211 jobs available
                </p>
              </div>
              <ArrowRight className="group-hover:text-white hidden md:block" />

            </div>
              <ArrowRight className="group-hover:text-white sm:hidden block" />
          </div>

          <div className="group sm:block sm:w-full hover:bg-blue-700 border mb-3 transition duration-300 ease-in-out shadow p-3 flex items-center justify-between cursor-pointer">
            <div>
              <Users className="text-blue-700 group-hover:text-white transition duration-300 ease-in-out" />
            </div>
            <div className="md:flex items-end justify-between">
              <div>
                <p className="text-gray-800 md:my-2 font-bold group-hover:text-white transition duration-300 ease-in-out">
                  Human Resource
                </p>
                <p className="text-gray-500 font-semibold group-hover:text-white transition duration-300 ease-in-out">
                  345 jobs available
                </p>
              </div>
              <ArrowRight className="group-hover:text-white hidden md:block" />

            </div>
              <ArrowRight className="group-hover:text-white sm:hidden block" />
          </div>
        </main>

        <Link href="#">
          <div className="text-purple-500 lg:hidden md:hidden flex items-center gap-2 mt-4">
            Show all jobs
            <ArrowRight size={18} />
          </div>
        </Link>
      </section>
    </>
  );
}
