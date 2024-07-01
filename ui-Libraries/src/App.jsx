import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LoginForm } from './components/LoginForm'
import { SignUp } from './components/SignUp'
import { Dashboard } from './components/Dashbaord'
import { SkeletonDemo } from './components/Skeleton'
import { NavigationMenuDemo } from './components/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
//     

<div className='flex justify-center flex-col gap-y-7 items-center p-4'>
<NavigationMenuDemo />
  <LoginForm />
  <SignUp />
  <Dashboard />
  <SkeletonDemo />
  
</div>

  )
}

export default App
