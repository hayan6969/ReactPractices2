import { useState,useRef ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginForm } from './components/LoginForm'
import { SignUp } from './components/SignUp'
import { Dashboard } from './components/Dashbaord'
import { SkeletonDemo } from './components/Skeleton'
import { NavigationMenuDemo } from './components/Navigation'
import MarqueeDemo from './components/MarqueeDemo'
import DockDemo from './components/DockDemo'
import Mult from './components/Mult'
import Sample from './components/Sample'
import useLocalStorage from './hooks/useLocalStorage'
import { useForm } from 'react-hook-form'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import CustomInput from './components/CustomInput'
import { Button } from './components/ui/button'


function App() {
  const {register,handleSubmit,control} = useForm()
  console.log('App rendered',Math.random()  )
  const inputRef=useRef()
  const [loggedIn,setLoggedIn]=useState(false)
 const save=()=>{
useLocalStorage('set','data',inputRef.current.value)
 }


 const [value,setValue]=useState(1)
  let multipliedValue=value*5

  const multiply=()=>{
    setValue(value+1)
  }




 const display=()=>{

  alert(useLocalStorage('get','data'))

 }
 useEffect(()=>{
 let check = useLocalStorage('get','data')
 if(check==1){
    setLoggedIn(true)
  
 }

 },[useLocalStorage('get','data')])



  return (

<div className='flex justify-center flex-col items-center p-10'>
{/* <Sample label='Enter any data'  ref={inputRef}/>
<button onClick={()=>{
  inputRef.current.select()
}} className='border-2 border-black p-2 mt-5 rounded-xl font-poppins hover:bg-black hover:text-white'>Click to display data</button>

<button onClick={display} className='border-2 border-black p-2 mt-5 rounded-xl font-poppins hover:bg-black hover:text-white'>Click to alert Data from local storage</button> */}


<h1>Main Value: {value}</h1>

<button onClick={multiply}>Click to multiply by 5</button>

<h2>Multiplied Value: {multipliedValue}</h2>


<div >
<form onSubmit={handleSubmit((data)=>{
  console.log(data)
})}>
  <div className='flex flex-col justify-between gap-y-7 items-center'>
  <Label>Enter name</Label>
  <Input   placeholder="Enter Name" {...register("name",{required:true})}/>
  <CustomInput name='password' control={control}/>
  <Button type='submit'>Save</Button>
  </div>
</form>
</div>



</div>

  )
}

export default App
