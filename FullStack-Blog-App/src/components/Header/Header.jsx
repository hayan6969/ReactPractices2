import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems=[
    {
      name:'home',
      slug:'/',
      active:true
    },
    {
      name:'Login',
      slug:'/login',
      active:!authStatus
    },
    {
      name:'Signup',
      slug:'/signup',
      active:!authStatus
    },
    {
      name:'All Posts',
      slug:'/all-posts',
      active:authStatus
    },
    {
      name:'Add Post',
      slug:'/add-post',
      active:authStatus
    }
  ]
  return (
    <header className='py-3  border-b-2 border-b-black'>
<Container>
  <nav className='flex'>
<div className='mr-4'>
<Link to='/'>
<Logo width='100px' />
</Link>
</div>
<ul className='flex ml-auto'>
{
  navItems.map((item)=>(
    item.active && <li key={item.name} className='mr-4'>
    <button
    onClick={()=>navigate(item.slug)}
    className='p-2 border-2 border-black rounded-xl hover:bg-black hover:text-yellow-300'
    >
      {item.name}
    </button>
  </li>
  ))
}
{authStatus && (<LogoutBtn />)}
</ul>
  </nav>
</Container>
    </header>
  )
}

export default Header