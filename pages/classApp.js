import React, { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function classApp() {
  return (
    <div>
      <Head>
        <title>รายชื่อนักเรียนชั้นม.5/1</title>
      </Head>
      <div className="flex flex-col items-center my-4">
        <Link href="/create_form">
          <button className="border border-black p-2 rounded font-serif hover:p-4 hover:bg-blue-200 duration-500">
            เพิ่มรายชื่อนักเรียนที่นี่ !!
          </button>
        </Link>
      </div>
    </div>
  );
}
