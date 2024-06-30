import React, { useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { PostCard,Container } from '../components'
import { useSelector } from 'react-redux'

function MyPosts() {
    const userId = useSelector((state) => {
        if(state.auth.userData){
            return state.auth.userData.userData.$id
        
        }
    })
    const [posts, setPosts] = React.useState([])
    useEffect(()=>{
        appwriteService.getPosts([]).then((postss)=> {
            postss.documents.map((post)=>{
                if(post.userId === userId){
                    setPosts([...posts,post])
                }
            })
        })
    },[])
  return (
    <div className='w-full py-8'>

<Container>
    <div className='flex flex-wrap'>

        {
            posts.map((post)=>(
                <div key={post.$id} className='p-2 w-1/4'>
                    <PostCard $id={post.$id} title={post.Title} featured_image={post.featuredImage} />
                    </div>
            ))
        }

    </div>
</Container>

    </div>
  )
}

export default MyPosts