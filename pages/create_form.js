import Head from 'next/head'
import {useState, useEffect} from 'react'
import { async } from 'rxjs';


function create_form() {
  const [CollectStudents, setCollectStudents] = useState([]);
  const submitContact = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const res = await fetch('/api/create_form', {
      body: JSON.stringify({
        name: name,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
  
  const result = await res.json();
  alert(`Is that your full name: ${result.name}`);
  }
    return (
    <div>
        <Head>
            <title>
                เพิ่มรายชื่อนักเรียน
            </title>
        </Head>
      <form className="flex w-90 flex-col items-center my-6" onSubmit={submitContact}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              ใส่ชื่อนักเรียนของท่าน
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="name"
              autoComplete='name'
              name='name'
              type="text"
              value={CollectStudents}
              onChange={(event) => setCollectStudents(event.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              ใส่ชั้นของท่าน
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
              id="inline-password"
              type="text"
              placeholder=""
              value="ม.5/1"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Send me your newsletter!</span>
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              เพิ่มรายชื่อนักเรียน
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default create_form;
