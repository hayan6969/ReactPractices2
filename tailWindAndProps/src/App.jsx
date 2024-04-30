import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='font-bold mb-4 hover:bg-blue-300 cursor-pointer transition-all  delay-100 rounded-md p-2 bg-red-400 text-black text-3xl shadow-2xl'>Tailwind Test</h1>
     <Card username="react"/> 
      <Card username="vite"/>
      <Card />



    </>
  )
}

export default App
