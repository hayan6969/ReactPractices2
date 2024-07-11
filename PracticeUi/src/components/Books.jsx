import React, { useEffect } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import appwriteService from "../appwrite/config"

import { CirclePlus, Loader2, MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

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


function Books() {
  const [books, setBooks] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  useEffect(()=>{
    setLoading(true)
    appwriteService.getBooks().then((res)=>{
      console.log(res.documents)
      setBooks(res.documents)
    }).finally(()=>setLoading(false))
  },[])
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

{/* <Button className="">
  <CirclePlus className="h-5 w-5 mr-2" />
  
  Add Books</Button> */}
  <Dialog>
      <DialogTrigger asChild>
        <Button >
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
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Genre
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              id="price"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="totalSale" className="text-right">
              Total Sale
            </Label>
            <Input
              id="totalSale"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Book</Button>
        </DialogFooter>
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
                  <CardDescription>
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
                        <TableHead>Status</TableHead>
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
                        
                              
                     return   <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <img
                            alt="Product img"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            src={book.image}
                            width="64"
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {book.name}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{book.genre}</Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {book.price}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {book.totalSale}
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
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
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