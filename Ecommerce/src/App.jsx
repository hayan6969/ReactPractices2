import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductListing } from './components/component/Product-listing'
import service from './services/Service'

function App() {

  const [products, setProducts] = useState([])
 
  useEffect(()=>{
    try {
      const fetchData = async()=>{
        const response = await service.getProductList()
        console.log("App :: response :: ", response.data.data.products);
        setProducts (response.data.data.products)
        console.log("the final products are",products)
        console.log("done")
      }

      fetchData()

      
      
    } catch (error) {
      console.log("App :: error :: ", error);
    }
  },[])

  return (
   <div>
    <ProductListing />
   </div>
  )
}

export default App
