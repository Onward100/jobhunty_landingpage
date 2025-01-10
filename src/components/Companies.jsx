import React from "react";

export default function Companies() {
  return (
    <>
      <section className="w-[90%] md:w-[85%] mx-auto">
        <h1 className="text-gray-500 text-base my-11">
          Companies we helped grow
        </h1>
        <div className="grid grid-cols-2 gap-7 lg:flex justify-between">
          <img src="/assets/images/vodafone-2017-logo.png" alt="logo" />
          <img src="/assets/images/intel.png" alt="logo" />
          <img src="/assets/images/talk.png" alt="logo" />
          <img src="/assets/images/amd.png" alt="logo" />
          <img src="/assets/images/TESLA.png" alt="logo" />
        </div>
      </section>
    </>
  );
}
