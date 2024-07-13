import React, { useEffect } from 'react'

import { CirclePlus, Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router-dom'
import service from '@/appwrite/config'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useDispatch } from 'react-redux'



function EditDialogue({name,price,totalSale,genre,id,setChanged}) {
    const {register,handleSubmit} = useForm({
        defaultValues:{
            name:name,
            price,
            totalSale,
            genre,
        }
    })
    const dispatch = useDispatch()
    const [loading,setLoading] = React.useState(false)
    const navigate = useNavigate()

const updateData= async(data)=>{
    setLoading(true)
    console.log("the picture is uploading")
    const file = data.image[0]? await service.uploadFile(data.image[0]):null
   
    console.log('file uploaded successfully, updating book details')
    await service.updateBook(id,{
        name:data.name,
        price:data.price,
        genre:data.genre,
        totalSale:data.totalSale,
        image:file? file.$id : undefined
    }).finally(()=>{ console.log('Book updated successfully')
    setLoading(false)
    setChanged((prev)=>!prev)
    
    
    
    
    
       
    
    })
    // if(res){
    //     console.log('Book updated successfully')
    //     navigate('/books')
        
    // }
   
   
}

if(loading){

    return <div className=''>
        <Loader2 className='h-4 w-4 ml-2 animate-spin'/>
    </div>

}


else{
    return (
        <Dialog>
        <DialogTrigger asChild>
          <Button>Edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Book</DialogTitle>
            <DialogDescription>
              Edit Book details
            </DialogDescription>
          </DialogHeader>
    <form onSubmit={handleSubmit(updateData)}
   
    >
    <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                
                className="col-span-3"
                {...register('name',{required:true})}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="genre" className="text-right">
                Genre
              </Label>
              <Input
                id="genre"
                
                className="col-span-3"
                {...register('genre',{required:true})}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                
                className="col-span-3"
                {...register('price',{required:true})}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="totalSale" className="text-right">
                Total Sale
              </Label>
              <Input
                id="totalSale"
                
                className="col-span-3"
                {...register('totalSale',{required:true})}
              />
            </div>
            <div className="grid grid-cols-4  items-center gap-4">
            <Label htmlFor="picture" className="text-right">Picture</Label>
            <Input id="picture" className="col-span-3 "  {...register("image")} type="file" />
            </div>
           
          </div>
          <DialogFooter>
            <Button  type="submit">
              Save Book</Button>
          </DialogFooter>
    </form>
    
          
        </DialogContent>
      </Dialog>

//     <Dialog>
//   <DialogTrigger>Open</DialogTrigger>
//   <DialogContent>
//     <DialogHeader>
//       <DialogTitle>Are you absolutely sure?</DialogTitle>
//       <DialogDescription>
//         This action cannot be undone. This will permanently delete your account
//         and remove your data from our servers.
//       </DialogDescription>
//     </DialogHeader>
//   </DialogContent>
// </Dialog>
    )
}


  
  
}

export default EditDialogue