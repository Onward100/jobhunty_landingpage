import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    setInputValue(e.target.value);

    e.preventDefault();
  }
  return (
    <>
      <section className="bg-gray-800 px-4 py-7 mt-11">
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
        <p className="text-gray-300 mt-4">
          Great platform for the job seeker that passionate about startups. Find
          your dream job easier.
        </p>

        <div className="lg:flex block">
          <div>
            <nav>
              <h1 className="text-white font-bold text-base">About</h1>
              <ul className="text-gray-300 mt-4">
                <li>
                  <Link href="#">Companies</Link>
                </li>
                <li>
                  <Link href="#">Pricing</Link>
                </li>
                <li>
                  <Link href="#">Terms</Link>
                </li>
                <li>
                  <Link href="#">Advice</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
              </ul>
            </nav>

            <nav>
              <h1 className="text-white font-bold text-base">Resources</h1>
              <ul className="text-gray-300 mt-4">
                <li>
                  <Link href="#">Help Docs</Link>
                </li>
                <li>
                  <Link href="#">Guide</Link>
                </li>
                <li>
                  <Link href="#">Update</Link>
                </li>
                <li>
                  <Link href="#">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h1 className="text-white font-bold text-base">
              Get job notifications
            </h1>
            <p className="text-gray-300 mt-4">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <form>
              <input
                type="text"
                value={inputValue}
                onChange={handleSubmit}
                placeholder="Email Address"
                className="w-full outline-none bg-white p-3"
              />
              <button className="bg-blue-600 text-white font-bold p-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
