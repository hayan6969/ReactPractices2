import { useState } from 'react'
import React from 'react'



import './App.css'
import { Button } from './components/ui/button';
import { Loader2 } from 'lucide-react';
import { LoginForm } from './components/Login';
import { SignupForm } from './components/Signup';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import Products from './components/Products';
import { Dash } from './components/Dash';
import Books from './components/Books';
import AuthLayout from './components/layouts/AuthLayout';



function App() {
  const [value, setValue] = React.useState("");

  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

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
    <Route path='dash' element={<AuthLayout>
      <Dash/>
    </AuthLayout>} />
    </Route>
   </Routes>
    </div>

  )
}

export default App
