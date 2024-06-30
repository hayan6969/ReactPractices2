import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { PostCard,Container } from '../components/index'
import authService from '../appwrite/auth'
import { useSelector } from 'react-redux'

function Home() {
    const [posts, setPosts] = React.useState([])
    const [loggedIn, setLoggedIn] = React.useState(false)
    const userStatus = useSelector((state) => state.auth.userData)
    
    useEffect(()=>{
        
            appwriteService.getPosts().then((posts)=>{
                if (posts) {
                    setPosts(posts.documents)
                }
               
            })

            const user=authService.getCurrentUser()
            if(user){
                setLoggedIn(true)
            }
        
    },[userStatus])
 if(posts.length === 0){
     return (
            <div className='w-full py-8'>
                <Container>
                    {
                        loggedIn? (
                            <div className='text-center'>
                                <h1 className='text-2xl font-bold'>No Posts Yet</h1>
                                <p className='text-gray-500'>Add a new post to get started</p>
                            </div>
                        ):(
                            <div className='text-center'>
                                <h1 className='text-2xl font-bold'>No Posts Yet</h1>
                                <p className='text-gray-500'>Login to add a new post</p>
                            </div>
                        )
                    }
                </Container>
            </div>
     )
 }
 else{
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {
                        posts.map((post)=>(
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard $id={post.$id} title={post.Title} featured_image={post.featuredImage}/>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
 }
}

export default Home