import { Loader2 } from 'lucide-react'
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AuthLayout({children,authentication=false}) {
    const Navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state=>state.auth.status)

    useEffect(()=>{
      console.log('authStatus was changed : ',authStatus)
if(authentication && authStatus !== authentication){  
  console.log('logout performed directing to login page')
   Navigate('/login')
}
else if(!authentication && authStatus !== authentication){
Navigate('/')
}
setLoader(false)
    },[authStatus, authentication, Navigate])

  return (
    loader?<Loader2 className='mr-2 h-10 w-10 animate-spin'/>:<>{children}</>
  )
}

export default AuthLayout