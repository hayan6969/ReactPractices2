import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'
function PostCard({
    $id, //appwrite syntax for id
    title,
    featured_image
}) {

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-yellow-50 rounded-xl p-4 '>
<div className='w-full justify-center mb-4'>
<img src={appwriteService.getImagePreview(featured_image)} alt="{title}"
className='rounded-xl ' />
</div>
<h2 className='text-xl text-black font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard