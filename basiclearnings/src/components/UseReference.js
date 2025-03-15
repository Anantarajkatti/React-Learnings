// use Reference - i sthe hook that creates mutable object which persists value across renders
// this  doesn't causes rerendering

//useCases
//1) to store mutable values without rerendering
//then why not use normal variable? :- bczthey donot persist value sacross rerenders

import React, { useEffect, useRef, useState } from "react";

function UseReference() {
  console.log("re rendering happens");
  const [count, setCount] = useState(0);
  const countref = useRef(0); // 1) store mutable values
  const inputRef = useRef(null);

  const handleInputClick = () => {
    console.log(inputRef.current.innerHTML); // 2) Dom selection
  };

  let prevCount = useRef(0);

  useEffect(() => {
    console.log("use effect runs now");
    prevCount.current = count;
    console.log("previos count is",prevCount.current)
    console.log(count)
  },[count]);

  return (
    <div-
      className="useRef"
      style={{
        width: "100%",
        height: "100%",
        border: "1px solid black ",
        padding: "15px",
      }}
    >
      <h2>useReference</h2>
      {/* store mutable value */}
      <h5>{countref.current.innerHTNL}</h5>
      <button
        onClick={() => {
          countref.current = countref.current + 1;
          console.log("count is", countref.current);
        }}
      >
        {" "}
        change count
      </button>
      {/* Dom direct select(accessing them) */}
      <h2> Dom reference</h2>
      <div ref={inputRef}> Hello All</div>
      <button onClick={handleInputClick}>click to focus</button>
      {/* storing Previous state values */}
      <div>{count}</div>
      <div> {prevCount.current}</div>
      <button
        onClick={() => {
          console.log("state is changed");
          setCount(count + 1);
        }}
      >
        Add count
      </button>
    </div>
  );
}

export default UseReference;
