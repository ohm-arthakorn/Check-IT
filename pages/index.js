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
        <div className="flex justify-center">
          <div>
            <h1>Check-IT</h1>
          </div>
          {/* Sub-title Part */}
          <div className="grid grid-cols-2">
            <div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
