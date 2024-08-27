import { useState,useRef } from "react";

import "./App.css";

function App() {
  const inputRef =useRef()
  
  console.log(inputRef.current)

  return (
    <>
    <input type="text" ref={inputRef}/>
    <button onClick={()=>{inputRef.current.style.background = "yellow"}}>Click Me</button>
    </>
  );
}

export default App;
