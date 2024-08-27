import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("red")
  

  const changeColor =() =>{
    let color ="blue";
    setColor(color)
  }


  return (
   <>
   <h1>My favourite color is {color}</h1>
   <button onClick={changeColor}>Color</button>
   </>
  )
}

export default App
