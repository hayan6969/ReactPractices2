import { axiosPrivate,axiosNormal } from "./axios"






export class backConfig{

async getBooks(){


    try {
        
        const response = await axiosNormal.get("/ecommerce/products?page=1&limit=100")
        if(response){
            console.log("Books fetched : ",response.data.data.products)
            return response.data.data.products
        }
        
    } catch (error) {
        console.log('Service :: getBooks :: error :: ',error)
    }

}


async getCategories(){
    try {
        
        const response = await axiosNormal.get("/ecommerce/categories")
        if(response){
            console.log("Categories fetched : ",response.data.data.categories)
            return response.data.data.categories
        }
        
    } catch (error) {
        console.log('Service :: getCategories :: error :: ',error)
    }

}

async addBook({book}){
    try {
        const formData = new FormData()
        formData.append('name',book.name)
        formData.append('price',book.price)
        formData.append('category',book.category)
        formData.append('description',book.description)
        formData.append('mainImage',book.mainImage)
        formData.append('stock',book.stock)


        const response = await axiosPrivate.post("/ecommerce/products",formData)
        if(response){
            console.log("Book added : ",response)
            return response
            
        }

        
    } catch (error) {
        console.log('Service :: addBook :: error :: ',error)
    }
}


}


const bConfig=new backConfig()
export default bConfig