import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='flex justify-evenly items-center border-2 border-black p-4'> 
    <NavLink to='/'  className={({isActive})=>`${isActive ? "underline font-bold text-red-700":'text-black font-bold'}`}>Home</NavLink>
    <NavLink to='/profile' className={({isActive})=>`${isActive ? "underline font-bold text-red-700":'text-black font-bold'}`}>Profile</NavLink>
    <NavLink to='/Contact' className={({isActive})=>`${isActive ? "underline font-bold text-red-700":'text-black font-bold'}`}>Contact</NavLink>
    
</div>
  )
}

export default Nav