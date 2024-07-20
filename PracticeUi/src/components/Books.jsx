import React, { useEffect } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useRef } from 'react'

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
import bConfig from '@/backend/config'
import { Textarea } from './ui/textarea'


function Books() {
  const categoriesRef = useRef()
  const [books, setBooks] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [changed, setChanged] = React.useState(false)
  const [categories, setCategories] = React.useState([])
  let category = null


  const {register,handleSubmit,reset}=useForm()
  const onAddBook=async(data)=>{
    setBookUpload(true)
    // const file =data.image[0] ? await service.uploadFile(data.image[0]) : null
    // console.log('file is ',file)

    
   
     const uploadedData= await bConfig.addBook({book:{price:Number(data.price),category, stock:Number(data.stock),name:data.name,description:data.description,mainImage:data.mainImage[0]}})
     if(uploadedData){
      console.log('book added successfully')
        setBookUpload(false)
        reset()

        setLoading(true)
    bConfig.getBooks.then((res)=>{
      console.log(res)
      setBooks(res)
    }).finally(()=>setLoading(false))
        

     }
    
  }
  useEffect(()=>{
    console.log("books are ",books)
  },[books])

  useEffect(()=>{
    bConfig.getCategories().then((res)=>{
      console.log(res)
      setCategories(res)

    })
  },[])

  useEffect(()=>{
    console.log(changed)
    setLoading(true)
    bConfig.getBooks().then((res)=>{
      if(res){
        setBooks(res)
        setLoading(false)
      }
    })
    
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
              Category
            </Label>
            <Select onValueChange={(e)=>{category=e
              console.log('category is ',category)
            }}   className="col-span-3" >
      <SelectTrigger className="w-[180px]">
        <SelectValue   placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className='h-[200px] overflow-y-auto'>
          <SelectLabel>Category</SelectLabel>
          
            {
              categories && categories.map((category)=>{
                return           <SelectItem key={category._id} value={category._id}>{category.name}</SelectItem>

              })
            }
          
          
        </SelectGroup>
      </SelectContent>
    </Select>
           
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
              Description
            </Label>
            <Textarea {...register('description',{required:true})} className="col-span-3 " placeholder="Enter the Description"/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Stock
            </Label>
            <Input
              id="stock"
              
              className="col-span-3"
              {...register('stock',{required:true})}
            />
          </div>
          <div className="grid grid-cols-4  items-center gap-4">
          <Label htmlFor="picture" className="text-right">Picture</Label>
          <Input id="picture" className="col-span-3 "  {...register("mainImage",{required:true})} type="file" />
          </div>
         
        </div>
        <DialogFooter>
          <Button disabled={bookUpload} type="submit">
            {bookUpload ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : null}
            Save Book</Button>
        </DialogFooter>
</form>

<Button onClick={onAddBook}>Click</Button>

        
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
                        <TableHead>Stock</TableHead>
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
                     
                      
                     { books &&
                      books.map((book)=>{
                        
                              
                     return   <TableRow key={book.name}>
                        <TableCell className="hidden sm:table-cell">
                          <img
                            alt="Product img"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src={book.mainImage.url}
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {book.name}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className='font-normal'>{book.stock}</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {book.price} $
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {book.price} $
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