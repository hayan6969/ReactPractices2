import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Profile() {
  return (
    <div className='flex flex-col '>
    <div className='mb-[80px]'><p>Profile</p></div>
    <div className='flex justify-evenly items-center'>
        <NavLink to='profile1' className={({isActive})=>`${isActive ?'border-2 border-black p-5 bg-yellow-200':'border-2 border-blue-600 p-5 bg-blue-200 '}`}>Profile 1</NavLink>
        <NavLink to='profile2'className={({isActive})=>`${isActive ?'border-2 border-black p-5 bg-yellow-200':'border-2 border-blue-600 p-5 bg-blue-200 '}`}>Profile 2</NavLink>
        <NavLink to='profile3' className={({isActive})=>`${isActive ?'border-2 border-black p-5 bg-yellow-200':'border-2 border-blue-600 p-5 bg-blue-200 '}`}>Profile 3</NavLink>
    </div>
    <Outlet/> 
    {/* //to render its child routes */}
    </div>
  )
}

export default Profile