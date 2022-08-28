import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Create_class() {
  return (
    <div>
      {/* ส่วนนี้เราจะสร้าง title โดยให้ใข้งานชื่อ Creating Class */}
      <Head>
        <title>Creating Class</title>
      </Head>
      {/* ส่วนของปุ่มที่เมื่อกดแล้วจะเด้งไปที่หน้า Form */}
      <div className="flex justify-center py-12">
        <Link href="/CreatingForm">
          <button className="px-12 py-4 border rounded border-solid border-blue-600 bg-blue-200 hover:bg-blue-400 duration-300 hover:text-white">
            Create Class
          </button>
        </Link>
      </div>
    </div>
  );
}
