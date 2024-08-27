import React from 'react'
import { useState } from "react";

const ChangeColor01 = () => {
  const [color, setColor] = useState("red");


const changeColor = () => {
  let color = "blue";
  setColor(color);
};

return (
  <>
    <h1>My favourite color is {color}</h1>
    <button onClick={changeColor}>Color</button>
  </>
);
  
}

export default ChangeColor01
