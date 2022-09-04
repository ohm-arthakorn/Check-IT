import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-blue-300">
      <div className="p-2 bg-blue-300">
        <div className="flex flex-1 bg-blue-300">
          {/* Logo Part */}
          <div className="flex">
            <Link href="/">
              <img src="/IMG/LG01.png" alt="Logo" className="w-28" />
            </Link>
          </div>

          {/* Button Part*/}
          <div className="w-full grid grid-cols-2 justify-items-center m-auto">
            {/* Class Button */}
            <span>
              <Link href="/classApp">
                <button className="font-serif ">รายชื่อนักเรียนม.5/1</button>
              </Link>
            </span>

            {/* Creating Result */}
            <span>
              <Link href="/CheckingResult">
                <button className="font-serif">ตรวจสอบการติดมส.</button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
