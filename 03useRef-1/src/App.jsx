import { useState } from 'react'

import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const [value, setValue] = useState(0)
  const count = useRef(0)
  console.log(count)

  useEffect(()=>{
    count.current = count.current +1
  })

  return (
  
    <>
    <button onClick={() =>setValue(prev=>prev-1)}>-1</button>
    <button onClick={() =>setValue(prev=>prev+1)}>+1</button>
    <h1>Render Count: {count.current}</h1>
    </>
  )
}

export default App
