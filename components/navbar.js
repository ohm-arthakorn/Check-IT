import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      {/* สร้าง Navigation Bar ที่เป็น Responsive Design */}
      <div className="max-w-6xl min-w-3xl p-2 mx-auto px-4 my-2 bg-blue-400 rounded-lg">
        
        <div className="flex justify-between">
          {/* Logo in Container Navbar */}
          <span className="flex justify-center">
            <Link href="/" className="">
              <img src="/IMG/LG01.png" alt="Logo" className="w-24" />
            </Link>
          </span>
          {/* Create Class & Checking Result  in Container Navbar */}

          {/* Button Create Class */}
          <span  className="flex justify-center">
            <Link href="/create_class">
              <button className="font-bold text-white rounded-lg bg-blue-300 px-2 py-4 hover:bg-blue-600 duration-300">Create Class</button>
            </Link>
          </span>
          {/* Button Checking Result */}
          <span className="flex justify-center">
            <Link href="/checking_result">
              <button className="font-bold text-white rounded-lg bg-blue-300 px-2 py-4 hover:bg-blue-600 duration-300">Checking Result</button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
