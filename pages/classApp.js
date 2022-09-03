import React, { useState } from "react";

export default function ClassApp() {
  const [member, setMember] = useState({
    name: "",
    lname: "",
  });
  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    // Prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(member)
  }

  return (
    <div>
      <div className="flex flex-col space-y-4 my-4 items-center">
        <div>Input your class students</div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>Name : </label>
          <input
            type="text"
            name="fname"
            className="border border-black"
            placeholder="Name"
          />
          <label>Lastname : </label>
          <input
            type="text"
            name="lname"
            className="border border-black"
            placeholder="Lastname"
          />
          <button type="submit" className="border border-black my-2">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
