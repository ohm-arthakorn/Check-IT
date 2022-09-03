import Head from "next/head";

export default function Home() {
  return (
    <div>
      <div>
        {/* Head to change title */}
        <Head>
          <title>Check-IT</title>
        </Head>
        {/* Introduction Part */}
        <div className="flex flex-col items-center my-5">
          {/* Heading */}
          <div>
            <h1 className="font-bold text-2xl font-serif">Check-It</h1>
          </div>
          {/* Subtitle describe */}
          <div className="">
            <p className="font-serif">
              "Check-IT" is a website created by the faculty to solve the problem of student attendance record. By changing the format from the original use of paper to record student attendance, it was changed to use the student's attendance record to use Software instead, in addition to solving the problem of paper attendance recording. It also solves environmental problems as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
