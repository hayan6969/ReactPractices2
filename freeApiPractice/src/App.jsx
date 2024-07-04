import { useEffect, useState,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import service from './backend/config'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { login, logout ,setChatId} from './store/authSlice'

function App() {
  const [jokes, setJokes] = useState([])
  const [userChats, setUserChats] = useState([  ])
  
  const connectChatRef = useRef()

  const userID=useSelector((state)=>{
    if(state.auth.status){
      return state.auth.userData._id
    }
  })

 const passRef = useRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const createChatRef = useRef()
  const [messages, setMessages] = useState([])
  const chatId=useSelector((state)=>{
    if(state.auth.status){
      return state.auth.chatId
    }
  })
  const messageRef = useRef()
  
  const dispatch = useDispatch()
const token=useSelector((state)=>{
  if(state.auth.status){
    return state.auth.token
  }
})
  const name =useSelector((state)=>{
    if(state.auth.status){
      return state.auth.userData.username
    }
  })
  const Logout=async()=>{
    await service.Logout(token).then((res)=>{
      console.log('logout was done with data below',res)
      if(res.status===200){
        dispatch(logout())
      }
    })
  }

  
  const oneOnOneChat=async()=>{

    await service.createChat(token,createChatRef.current.value).then((res)=>{
      console.log('chat was created with data below',res.data.data._id)
      dispatch(setChatId(res.data.data._id))
    })

  }
useEffect(()=>{
  chatId&&getMessages()
},[chatId])

useEffect(()=>{
  userID&& setUserChats([])
  userID&&setMessages([])
},[userID])
  const signUp=async()=>{
    await service.register(nameRef.current.value,emailRef.current.value,passRef.current.value).then((res)=>{
      console.log('signup was done with data below',res)
      
    }
    )

    await service.Login(nameRef.current.value,passRef.current.value).then((res)=>{
      console.log('login was done with data below',res)
      dispatch(login(res.data.data))
    
    }
    )
  }

  const getAllChats=async()=>{



    try {

      await service.getAllChats(token).then((res)=>{
        console.log('chats were fetched with data below',res)
        setUserChats(res.data.data)
      })
      
    } catch (error) {
      console.log(error)
    }
  }

  const connectToChat=async()=>{
    try {
       dispatch(setChatId(connectChatRef.current.value))

       getMessages()
      
    } catch (error) {
      console.log(error)
    }
  }
  const getMessages=async()=>{

    try {
      await service.getMessages(token,chatId).then((res)=>{
        console.log('messages were fetched with data below',res)
        setMessages(res.data.data)
      })
      
    } catch (error) {
      console.log(error)
    }
  }
  
  const sendMessage=async()=>{
try {
  // const messageObject={
  //   content:messageRef.current.value
  // }
  await service.sendMessage(token,chatId,{content:messageRef.current.value}).then((res)=>{
    console.log('message was sent with data below',res)
  })

  getMessages()
  
} catch (error) {
  console.log(error)
}

  }

  const logIn=async()=>{
    // alert(emailRef.current.value)
    // service.register(nameRef.current.value,emailRef.current.value,passRef.current.value)
    // service.getCurrentUser()
    
    await service.Login(nameRef.current.value,passRef.current.value).then((res)=>{
      console.log('login was done with data below',res)
      dispatch(login(res.data.data))
    
    })
    
   

// service.getCurrentUser()
  }

  const currentUser=async()=>{
    await service.getCurrentUser(token).then((res)=>{
      console.log('current user was done with data below',res.data.data.id)
    })
  }

  
 
  return (
  <div className='w-screen h-screen justify-between items-center flex   '>
   <div className='flex flex-col w-[20%] bg-blue-700 h-screen justify-center items-center'>
   <input type="text" ref={nameRef} className='p-2 border-2 w-[100%] border-black ' placeholder='Enter Name' />
   <input type="email" ref={emailRef} className='p-2 border-2 w-[100%] border-black ' placeholder='Enter Email' />
   <input type="password" ref={passRef} className='p-2 border-2 w-[100%] border-black ' placeholder='Enter Password' />
   <button onClick={logIn} className='p-4 border-2 border-black hover:bg-black hover:text-white cursor-pointer'>Login</button>
   <button onClick={signUp} className='p-4 border-2 border-black hover:bg-black mt-4 hover:text-white cursor-pointer'>Sign Up</button>
   <button onClick={Logout} className='p-4 border-2 border-black hover:bg-black mt-4 hover:text-white cursor-pointer'>Log out</button>
   <button onClick={currentUser} className='p-4 border-2 border-black hover:bg-black mt-4 hover:text-white cursor-pointer'>Current User</button>


   

   </div>
   <div className='flex flex-col w-[80%] bg-blue-500 h-screen justify-center items-center'>
   <div className='flex justify-center items-center'>
   <div>
   <h1 className='text-3xl font-bold'>Welcome: {name} </h1>
   <p className='font-bold '>User ID: {userID}</p>
   <p className='font-bold '>Chat id: {chatId}</p>
    <input ref={createChatRef} type="text" placeholder='Enter user id to start a chat' />
    <button onClick={oneOnOneChat} className='border-2 p-2 mt-2'>Create Chat</button>
    <div>
    <input ref={connectChatRef} type="text" placeholder='Enter chat id' />
    <button onClick={connectToChat} className='border-2 p-2 mt-2'>Connect to Chat</button>
   </div>
   <div>
    
   </div>
   
    </div>
    <div className='border-2 ml-4 w-[200px] flex flex-col justify-between items-center h-[150px]'>
    <div className='overflow-auto'>

      {
        userChats.map((chat)=>{
          return <div onClick={()=>{
            dispatch(setChatId(chat._id))
            getMessages()
            
          }} className='border-2 border-black cursor-pointer p-2 mt-2'>
            <p className='text-xl font-bold'>{chat.name}</p>
            {
              chat.participants.map((participant)=>{
                return <p>participant: {participant.username}</p>
              
              })
            }
          </div>
        })
      }
    </div>
    <div><button onClick={getAllChats} className='p-1 border-2 cursor-pointer'>get all chats</button></div>
    </div>
   </div>

    <div>
    <input ref={messageRef}  type="text" placeholder='type message' />
    <button onClick={sendMessage} className='border-2 p-2 mt-2'>Send message</button>
    <button onClick={getMessages} className='border-2 p-2 mt-2'>get chats</button>

    </div>
    <div className='border-2 border-black mt-2 p-1 '>
    <h1 className='text-2xl font-bold'>Chats</h1>
    <div className=' w-[500px] h-[300px] overflow-auto bg-white'>

{
  messages.map((message)=>{
    return <div className='border-2 border-black p-2 mt-2'>
      <h1 className='text-xl font-bold'>{message.sender.username}</h1>
      <p>{message.content}</p>
    </div>
  })
}

    </div>
    </div>

   </div>

  
   

  </div>
  )
}

export default App
