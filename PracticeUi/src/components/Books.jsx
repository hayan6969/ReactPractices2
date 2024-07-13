import React, { useEffect } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useNavigate } from 'react-router-dom'

import appwriteService from "../appwrite/config"

import { CirclePlus, Loader2, MoreHorizontal } from "lucide-react"
import { useForm } from 'react-hook-form'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

import service from '../appwrite/config'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import EditDialogue from './EditDialogue'


function Books() {
  const [books, setBooks] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [changed, setChanged] = React.useState(false)


  const {register,handleSubmit,reset}=useForm()
  const onAddBook=async(data)=>{
    setBookUpload(true)
    const file =data.image[0] ? await service.uploadFile(data.image[0]) : null
    console.log('file is ',file)

    if(file){
      console.log('now will add book')
     const uploadedData= await service.addBook({...data,image:file.$id,createdAt: new Date().toLocaleString()})
     if(uploadedData){
      console.log('book added successfully')
        setBookUpload(false)
        reset()

        setLoading(true)
    appwriteService.getBooks().then((res)=>{
      console.log(res.documents)
      setBooks(res.documents)
    }).finally(()=>setLoading(false))
        

     }
    }
  }

  useEffect(()=>{
    console.log(changed)
    setLoading(true)
    appwriteService.getBooks().then((res)=>{
      console.log(res.documents)
      setBooks(res.documents)
    }).finally(()=>setLoading(false))
  },[changed])

const [bookUpload, setBookUpload] = React.useState(false)

 
  return (
    <div className='h-[500px] font-kanit  max-sm:h-[700px] p-2 '>    

<div className='flex  justify-between items-center '>
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Books</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>


  <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white" >
          <CirclePlus className="h-5 w-5 mr-2" />
          Add Books</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Book</DialogTitle>
          <DialogDescription>
            Enter Book details
          </DialogDescription>
        </DialogHeader>
<form onSubmit={handleSubmit(onAddBook)} >
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
          <Input id="picture" className="col-span-3 "  {...register("image",{required:true})} type="file" />
          </div>
         
        </div>
        <DialogFooter>
          <Button disabled={bookUpload} type="submit">
            {bookUpload ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
            Save Book</Button>
        </DialogFooter>
</form>

        
      </DialogContent>
    </Dialog>
</div>



{
  loading ? (<div className='flex justify-center  items-center'> 
    <Loader2 className='h-[100px] w-[100px] mt-[180px] animate-spin ' />
  </div>
  ) : (
    <Card className="mt-3 ">
                <CardHeader>
                  <CardTitle >Books</CardTitle>
                  <CardDescription >
                    Manage your books and view their sales performance.
                  </CardDescription>
                </CardHeader>
                <CardContent className=" h-[350px] max-sm:h-[500px] overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">img</span>
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Genre</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Price
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Total Sales
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Created at
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                     
                      
                     {
                      books.map((book)=>{
                        
                              
                     return   <TableRow key={book.name}>
                        <TableCell className="hidden sm:table-cell">
                          <img
                            alt="Product img"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src={service.getImagePreview(book.image)}
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {book.name}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className='font-normal'>{book.genre}</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {book.price} $
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {book.totalSale} $
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {book.createdAt}

                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <EditDialogue name={book.name} setChanged={setChanged} totalSale={book.totalSale} price={book.price} id={book.$id} genre={book.genre} />

                              <DropdownMenuItem onClick={()=>{
                                service.deleteBook(book.$id).then(()=>{
                                  setLoading(true)
                                  appwriteService.getBooks().then((res)=>{
                                    console.log(res.documents)
                                    setBooks(res.documents)
                                  }).finally(()=>setLoading(false))
                                })
                              
                              }} >Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>

                      })
                     }
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>{books.length}</strong> {" "}
                    products
                  </div>
                </CardFooter>
              </Card>
  )
}

</div>



    
  






    
  )
}

export default Books