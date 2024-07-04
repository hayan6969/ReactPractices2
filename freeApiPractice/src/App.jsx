import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import service from './backend/config'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
 
 
  return (
  <div className='w-screen h-screen flex flex-col'>
   <h1>axios</h1>
   <h1>Jokes: </h1>

   {
      jokes.map((joke)=>{
        return <div key={joke.id}>{joke.content}</div>
      })
   }

   

  </div>
  )
}

export default App
