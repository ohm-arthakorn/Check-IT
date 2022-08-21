import React from "react";
import { useState } from "react";
export default function Test() {
  // Create State
  const [noteContent, setNoteContent] = useState("");

  return (
    <div className="ctn">
      <h3>{noteContent}</h3>
      <p>
        <input
          type="text"
          placeholder="Please input some text "
          value={noteContent}
          onChange={(event) => {
            setNoteContent(event.target.value);
          }}
        />
      </p>
      <button type="submit">Submit</button>
      <p></p>
    </div>
  );
}
