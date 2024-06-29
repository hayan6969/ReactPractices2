import { useState ,useEffect} from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from './store/authSlice'
import { Footer, Header } from './components'
import { BrowserRouter  } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Home from './pages/Home'
import Post from './pages/Post'
import EditPost from './pages/EditPost'
import AllPost from './pages/AllPost'
import Protected from './components/AuthLayout'
import AddPost from './pages/AddPost'

function App() {
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()

useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }
    else{
      dispatch(logout())
    
    }
  
  })
  .finally(()=>setLoading(false))
},[])
 return !loading? (
  <div className='min-h-screen font-Poppins flex flex-wrap content-between bg-yellow-300'>
    <div className='w-full block'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Protected authentication={false}>
          <LoginPage />
        </Protected>} />
        <Route path='/signup' element={<Protected authentication={false}>
          <SignupPage />
        </Protected>} />
        <Route path='/post/:slug' element={<Post />} />
        <Route path='/edit-post/:slug' element={<Protected authentication>
          {" "}
          <EditPost />
        </Protected>} />
        <Route path='/all-posts' element={<Protected authentication>
          {" "}
          <AllPost />
        </Protected>} /> 
        <Route path='/add-post' element={
          <Protected authentication>
          {" "}
          <AddPost />
        </Protected>
        } />
      </Routes>
      <Footer />
    </div>
  </div>
 ):null

}

export default App
