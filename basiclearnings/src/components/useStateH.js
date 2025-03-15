import React, { useState } from "react";

function UseStateH() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  return (
    <div
      className="useState"
      style={{
        width: "100%",
        height: "100%",
        border: "1px solid black ",
        padding: "15px",
      }}
    >
    <h2> UseState Examples</h2>
      <ol>
        <li>
          <h3> usestate in count</h3>
          <div>{count}</div>
          <button onClick={() => setCount((prev) => prev + 1)}>
            {" "}
            count change
          </button>
        </li>
        <li>
          <h3> useState in input elements</h3>
          <h4><span>Name is </span>{name}</h4>
          <form>
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              onInput={(e) => setName(e.target.value)}
            ></input>
          </form>
        </li>
      </ol>
    </div>
  );
}

export default UseStateH;
