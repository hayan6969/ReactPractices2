import { axiosPrivate,axiosNormal } from "./axios"






export class backConfig{

async getBooks(){


    try {
        
        const response = await axiosNormal.get("/ecommerce/products")
        if(response){
            console.log("Books fetched : ",response)
            return response.data.data
        }
        
    } catch (error) {
        console.log('Service :: getBooks :: error :: ',error)
    }

}


}


const bConfig=new backConfig()
export default bConfig