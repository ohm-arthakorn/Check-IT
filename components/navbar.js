import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      {/* สร้าง Navigation Bar ที่เป็น Responsive Design */}
      <div className="max-w-6xl mx-auto px-4 my-8">
        {/* Logo in Container Navbar */}
        <div className="flex justify-between">
          <span className="flex justify-center">
            <Link href="/" className="">
              <img src="/IMG/LG01.png" alt="Logo" className="w-24" />
            </Link>
          </span>
          {/* Create Class & Checking Result  in Container Navbar */}
          {/* Button Create Class */}
          <span  className="flex justify-center">
            <Link href="/create_class">
              <button>Create Class</button>
            </Link>
          </span>
          {/* Button Checking Result */}
          <span className="flex justify-center">
            <Link href="/checking_result">
              <button>Checking Result</button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
