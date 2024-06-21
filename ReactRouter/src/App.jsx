import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NavLink} from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const inRouter = createBrowserRouter([
    {
      path:'/profile', element:<Profile/>
    },
    {
      path:'/contact', element:<Contact/>
    }
  ]);
  // const router = createBrowserRouter([

  //   {
  //     path: '/',
  //     element:<HomePage/>
  //   },
  //   {
  //     path:'/profile',
  //     element:<Profile/>
  //   },
  //   {
  //     path:'/contact',
  //     element:<Contact/>
  //   }
  
  // ]);

  return (
    <>
   
 <div>
 </div>
    </>
  )
}

export default App
