import { Link,useNavigate } from "react-router-dom"
import authService from "@/appwrite/auth"
import { useEffect, useRef, useState } from "react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDispatch } from "react-redux"

import { login } from "@/store/authSlice"



export function SignupForm() {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const nameRef = useRef()


const onSignup=async()=>{
  try {
    console.log(emailRef.current.value,passwordRef.current.value,nameRef.current.value)
    setLoading(true)
    const userData=await authService.createAccount(emailRef.current.value,passwordRef.current.value,nameRef.current.value)
    if(userData){
      const userData=await authService.getCurrentUser()
      if(userData){
        console.log('the user Data is')
        dispatch(login(userData))

        navigate('/')
      }
    }
    
  } catch (error) {
    setLoading(false)
    console.log(error)
  }
}



  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          
            
              <Label htmlFor="first-name">Name</Label>
              <Input id="first-name" ref={nameRef} placeholder="Max" required />
            
            
         
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
            ref={emailRef}
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" ref={passwordRef} type="password" />
          </div>
          <Button disabled={loading} onClick={onSignup} type="submit" className="w-full">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Sign up"}
          </Button>
          <Button variant="outline" disabled={loading} className="w-full">
            Sign up with GitHub
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
