import { useState } from "react"

export const Count = () => {
    const [count,setCount] =useState(0)

    const increaseCount =() =>{
        setCount((count) => count + 1)
        setCount((count) => count + 1)
        setCount((count) => count + 1)
        setCount((count) => count + 1)

    }
  
    return (
        <>
    <div>Count: {count}</div>
    <button onClick={increaseCount}>Increase +4</button>
        </>
  )
}
