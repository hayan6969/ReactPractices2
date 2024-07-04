import React from 'react'
import { Controller } from 'react-hook-form'
import { Input } from './ui/input'
function CustomInput({name,control}) {
  return (
    <div>
        <Controller
        name={name || "password"}
        control={control}
        render={({field:{onChange}})=>(
            <Input
            
           
            placeholder='Enter password'
            onChange={onChange}
          


            
            
            />
        )}
        
        
        
        
        />

        
        </div>
  )
}

export default CustomInput