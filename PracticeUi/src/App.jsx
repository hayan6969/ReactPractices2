import { useState } from 'react'
import React from 'react'
import { Input } from '@nextui-org/react'
import { MailIcon } from './components/MailIcon'


import './App.css'



function App() {
  const [value, setValue] = React.useState("");

  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
   <div className='  w-screen h-screen flex justify-center items-center overflow-hidden '>

    

     <Input
          type="email"
          label="Email"
          placeholder="you@example.com"
          className="w-[20%]"
          labelPlacement="outside"
          endContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
   
   

    </div>

  )
}

export default App
