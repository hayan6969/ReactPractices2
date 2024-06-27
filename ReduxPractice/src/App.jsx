import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
   <div className='h-screen w-screen flex flex-col justify-center items-center bg-black'>
  
  <h1 className='text-4xl text-white text-center font-bold'>React Redux</h1>
 <div className='w-full flex flex-col items-center'> <AddTodo/>
 </div>
<div className='w-full px-4'>
<Todos  />
</div>

   </div>
  )
}

export default App
