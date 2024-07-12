import { useEffect, useState } from 'react'
import React from 'react'



import './App.css'
import { Button } from './components/ui/button';
import { Loader2 } from 'lucide-react';
import { LoginForm } from './components/Login';
import { SignupForm } from './components/Signup';
import { Route, Routes,useNavigate } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import Products from './components/Products';
import { Dash } from './components/Dash';
import Books from './components/Books';
import AuthLayout from './components/layouts/AuthLayout';
import { useDispatch } from 'react-redux';
import { login } from './store/authSlice';
import authService from './appwrite/auth';


function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loader,setLoader] = useState(false)

 useEffect(()=>{
  setLoader(true)
  authService.getCurrentUser().then((userData)=>{
    if(userData){
      dispatch(login(userData))
      navigate('/')
      setLoader(false)
    }
    else{
      navigate('/login')
      setLoader(false)
    }
  
  })

 },[])

  
if(loader){
  return (
    <div className='  w-screen h-screen font-kanit flex justify-center items-center overflow-hidden '>
 
     
    <Loader2 className='mr-2 h-10 w-10 animate-spin'/>
 
     </div>
 
   )
}

else{
  return (
    <div className='  w-screen h-screen font-kanit flex justify-center items-center overflow-hidden '>
 
     
    <Routes  >
     <Route path='/login' element={<LoginForm />} />
     <Route path='/signup' element={<SignupForm />} />
     <Route path='/' element={<AuthLayout>
       <Dashboard/>
     </AuthLayout>} >
     <Route path='products' element={<AuthLayout>
       <Books/>
     </AuthLayout>} />
     <Route path='' element={<AuthLayout>
       <Dash/>
     </AuthLayout>} />
     </Route>
    </Routes>
     </div>
 
   )
}
 
}

export default App
