import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {Button,Input,Logo} from '../components/index'
import { useForm } from 'react-hook-form'


function Login() {
    const Navigate=useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()
    const [error,setError] = useState('')

    const login = async (data)=>{
        setError('')
        try {
           const session= await authService.login(data)
           if(session){
            const userData = await authService.getCurrentUser()
            if(userData){
                dispatch(authLogin({userData}))
                Navigate('/') //forcefully send 
                
            }
           }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex items-center justify-center w-full'>
<div className={`mx-auto w-full max-w-lg bg-yellow-100 rounded-xl p-10 border border-black/10`}>
<div className='mb-2 flex justify-center '>
    <span className='inline-block w-full max-w-[100px]'>
    <Logo width="100%"/>
    </span>
</div>
<h2 className='text-center text-2xl font-bold'>Sign in to your account</h2>
<p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form className='mt-8' onSubmit={handleSubmit(login)}>
<div className='space-y-5'>
<Input
label='Email'
placeholder='Enter your email' //goes through the ...props
{...register('email',{
    required:true,
    validate:{
        matchPattern:(value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
    }
})}
/>
<Input
label='Password'
type='password'
placeholder='Enter your password'
{...register('password',{
    required:true,
})}
/>

<Button
type='submit'
children='Sign in'
className='w-full'
/>


</div>
        </form>
</div>
    </div>
  )
}

export default Login