import React from "react";
import Link from "next/link";

export default function Navbar() {
 
  
  return (
    <div>
      <div className="flex flex-1">
        {/* Logo Part */}
        <div className="flex">
            <Link href='/'>
              <img src="/IMG/LG01.png" alt="Logo" className="w-28"/>
            </Link>
        </div>

        {/* Button Part*/}
        <div className="w-full grid grid-cols-2 justify-items-center m-auto">

          {/* Class Button */}
          <span>
            <Link href='/class'>
              <button>
                Class
              </button>
            </Link>
          </span>

          {/* Creating Result */}
          <span>
            <Link href='/CheckingResults'>
              <button>
                Checking Result
              </button>
            </Link>
          </span>
        </div>
      </div>
   </div>
  );
}
