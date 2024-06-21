import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp.jsx'
import Links from './pages/Links.jsx'
import Profile from './pages/Profile.jsx'
import Contact from './pages/Contact.jsx'
import Nav from './pages/Nav.jsx'
import HomePage from './pages/HomePage.jsx'
import P1 from './pages/P1.jsx'
import P2 from './pages/P2.jsx'
import P3 from './pages/P3.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
  <Nav/>
 
  <Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/profile' element={<Profile/>}>
  <Route path='profile1' element={<P1/>}/>
  <Route path='profile2' element={<P2/>}/>
  <Route path='profile3' element={<P3/>}/>
  </Route>
  <Route path='/contact' element={<Contact/>}/>
  </Routes>
   
  </React.StrictMode>
  </BrowserRouter>
  
  ,
)
