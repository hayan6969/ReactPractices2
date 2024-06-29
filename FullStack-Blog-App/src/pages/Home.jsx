import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { PostCard,Container } from '../components/index'

function Home() {
    const [posts, setPosts] = React.useState([])
    useEffect(()=>{
        
            appwriteService.getPosts().then((posts)=>{
                if (posts) {
                    setPosts(posts.documents)
                }
               
            })
        
    })
 if(posts.length === 0){
     return (
            <div className='w-full py-8'>
                <Container>
                    <h1 className='text-3xl font-bold'>Login to Read Posts</h1>
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
                                <PostCard {...post} />
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