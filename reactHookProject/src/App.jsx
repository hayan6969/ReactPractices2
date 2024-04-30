import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


const [counter,setCounter]=useState(0)

const addValue=()=>{
  setCounter(counter+1)

  //to update it mulitple time using previous value
  // setCounter((prev)=>prev+1)
  // setCounter((prev)=>prev+1)

  //because if u just repeat the setCounter(counter+1), react fibre will take it as a similar job and make a single batch of it so the counter will only be updated one time
}
const removeValue=()=>{
  if(counter>0){
    setCounter(counter-1)
  }
}
  return (
    <>
     <h1>This is a counter project</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={addValue}>Add Value</button>
     <br />
     <br />
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
