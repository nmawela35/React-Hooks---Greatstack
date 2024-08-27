import { useState,useMemo } from 'react'

import './App.css'

function App() {
  const [number, setNumber] = useState(4)
  const [counter, setCounter] = useState(0)

  function cubeNum(num){
    console.log("Calc done")
    return Math.pow(num,3)
  }

  const result = useMemo(() =>{cubeNum(number)},[number])

  return (
    <>
    <input type="number" onChange={(e) =>{setNumber(e.target.value)}} />
    <h1>Cube of number: {result}</h1>
    <button onClick={() =>setCounter(counter+1)}>Counter++</button>
    <h1>Counter: {counter}</h1>
    </>
  )
}

export default App
