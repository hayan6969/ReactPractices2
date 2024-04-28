import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hay from './Hay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hi this is React</h1>
     <Hay/> 

    </>
  )
}

export default App
