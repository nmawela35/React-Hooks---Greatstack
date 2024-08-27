import React from 'react'
import { useState } from 'react'

export const Car = () => {

const [car1,setCar] =useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
    color:"red"
})
console.log(car1)

const ChangeColor=() =>{
    setCar((prev) =>{
        return {...prev,model:"spider"}
    })
}

  return (
    <>
    <div>{car1.model}</div>
    <button onClick={ChangeColor}>Click</button>
    </>
  )
}
