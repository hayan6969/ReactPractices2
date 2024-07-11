import {Link,useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux"
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
import { useEffect, useRef,useState } from "react"
import authService from "@/appwrite/auth"
import { Loader2 } from "lucide-react"
import { login } from "@/store/authSlice"

export function LoginForm() {
  const navigate=useNavigate()
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const dispatch = useDispatch()

const onLogin=async()=>{
  try {
    setLoading(true)
    const userData=await authService.login(emailRef.current.value,passwordRef.current.value)
    if(userData){
      const userData=await authService.getCurrentUser()
      if(userData){
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
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
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
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link to='/' className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" ref={passwordRef} type="password" required />
          </div>
          <Button disabled={loading} onClick={onLogin} type="submit" className="w-full">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Login"}
        
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to='/signup' className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
