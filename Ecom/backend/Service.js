import axios from "axios";

export class Service{

    BaseUrl="http://localhost:8080/api/v1"


    async getProductList(){

        try {
         return await axios.get(this.BaseUrl+"/ecommerce/products")
         
         

            
        } catch (error) {

            console.log("Service :: getProductList :: error :: ", error);
            
        }



    }

    







}

const useService = new Service()
export default useService
