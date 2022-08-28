import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      {/* สร้าง Navigation Bar ที่เป็น Responsive Design */}
      <div className="grid grid-cols-3 bg-blue-400">
        {/* Logo Part */}
        <div className="flex justify-center align-middle">
          {/* Logo in Container Navbar */}
          <span className="flex justify-center align-middle">
            <Link href="/" className="">
              <img src="/IMG/LG01.png" alt="Logo" className="w-24 rounded p-2" />
            </Link>
          </span>
        </div>
        {/* Create Class & Checking Result  in Container Navbar */}
        {/* Create Class */}
        <div className="grid col-start-2 col-end-3">
          {/* Button Create Class */}
          <span className="flex justify-center mx-1 my-auto">
            <Link href="/create_class">
              <button className="h-1/2 sm:w-1/2 font-bold text-center text-white rounded-lg bg-blue-300 px-12 py-2 hover:bg-blue-600 duration-300">
                Create Class
              </button>
            </Link>
          </span>
        </div>
        {/* Checking Result */}
        <div className=" grid col-start-3 col-end-4">
          {/* Button Checking Result */}
          <span className="flex justify-center mx-1 my-auto">
            <Link href="/checking_result">
              <button className="h-1/2 sm:w-1/2 font-bold text-center text-white rounded-lg bg-blue-300 px-12 py-2 hover:bg-blue-600 duration-300">
                Checking Result
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
