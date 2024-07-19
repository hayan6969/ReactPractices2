import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductListing } from './components/component/Product-listing'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <ProductListing />
   </div>
  )
}

export default App
