import React from 'react'

function Button({
    children, //button text
    type='button',
    bgColor='bg-yellow-300',
    textColor='text-black',
    className='',
    ...props 

}) {
  return (
   <button className={`p-2 border-2 border-black rounded-xl ${bgColor} ${textColor} hover:bg-black hover:text-yellow-300 ${className}` } {...props}>
         {children} 
   </button>
  )
}

export default Button