import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children,authentication=true}) {

    const Navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state=>state.auth.status)

    useEffect(()=>{
if(authentication && authStatus !== authentication){
   Navigate('/login')
}
else if(!authentication && authStatus !== authentication){
Navigate('/')
}
setLoader(false)
    },[authStatus,Navigate,authentication])

  return (
    loader?<h1>loading...</h1>:<>{children}</>
  )
}

