import React from "react";
import { useState } from "react";

export default function Form() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [full, setFull] = useState("");

  function submit() {}

  return (
    <>
      <form
        action=""
        style={{ margin: "2rem" }}
        onSubmit={(e) => {
          e.preventDefault();
          setFull("Full Name: "+first + " " + last);
        }}
      >
        <h1>Full Name Display</h1>
        <label>First Name:</label>
        <input
          type="text"
          value={first}
          onChange={(event) => {
            setFirst(event.target.value);
          }}
          required
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          value={last}
          onChange={(event) => {
            setLast(event.target.value);
          }}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1>{full}</h1>
    </>
  );
}
