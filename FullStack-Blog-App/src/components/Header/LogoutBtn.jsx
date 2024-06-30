import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler =()=>{
authService.logout()
.then(()=>{
    dispatch(logout())

})
    }
  return (
    <button onClick={logoutHandler} className='p-2 border-2 border-black rounded-xl hover:bg-black hover:text-yellow-300'>Logout</button>
  )
}

export default LogoutBtn