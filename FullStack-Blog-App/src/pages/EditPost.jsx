import React,{useState,useEffect} from 'react'
import {Container,PostForm} from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState(null)
    const [imgUrl,setImgUrl] = useState('')
    const {slug} = useParams()
    const Navigate=useNavigate()

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if (post) {
                    setPost(post)
                    console.log('the original post image data is : ',post.featuredImage)
                }
                else{
                    Navigate('/')
                }
            })
        }
    },[slug,Navigate])
  return  post ? (
    <div className='py-8'>
        <Container>
            <PostForm postData={ {$id:post.$id, Title:post.Title, Content:post.Content, featuredImage:post.featuredImage, status:post.status}} />
        </Container>
    </div>
  ):null
}

export default EditPost