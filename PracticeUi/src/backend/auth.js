import { user } from "@nextui-org/theme";
import { axiosPrivate,axiosNormal } from "./axios";
import useLocalStorage from "@/hooks/useLocalStorage";
import { login } from "@/store/authSlice";




export class backAuth{


async signUp(email,password,username){


    try {

        const response = await axiosNormal.post("/users/register",{
            email:email,
            password:password,
            role:"ADMIN",
            username:username
        })

        if(response){
            console.log("Registration successful : ",response)
            return login(username,password)
            
        }
        
    } catch (error) {
        console.log('Service :: signUp :: error :: ',error)
    }



}


async Login(username,password){



try {

    const response = await axiosNormal.post("/users/login",{
        password:password,
        username:username
    })

    if(response){
        console.log("Login successful : ",response)
        useLocalStorage('set','token',response.data.data.accessToken)
        return response.data.data.user
        
    }
    
} catch (error) {
    console.log('Service :: Login :: error :: ',error)
}


}


async getCurrentUser(){
    try {

        const response = await axiosPrivate.get("/users/current-user")

        if(response){
            console.log("User details fetched : ",response)
            return response.data.data
            
        }
        
    } catch (error) {
        console.log('Service :: getCurrentUser :: error :: ',error)
    }
}


}


const bAuth = new backAuth()
export default bAuth