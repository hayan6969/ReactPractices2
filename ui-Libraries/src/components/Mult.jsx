import React from 'react'
import { useState } from 'react'

function Mult() {
    console.log('App rendered')
    const [value,setValue]=useState(1)
    const multiply=()=>{
        setValue(1)
    }
 
  return (
    <>
    <h1>Main Value: {value}</h1>
  <button className='border-2 p-2 border-black rounded-xl' onClick={multiply}>Click me</button>
  </>
  )
}

export default Mult