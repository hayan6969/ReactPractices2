import axios from "axios";
import { useSelector } from "react-redux";









export class Service {

    async register(name, email, password){
        try {
            return await axios.post("http://localhost:8080/api/v1/users/register",{
                email: email,
                password: password,
                role:"ADMIN",
                username: name
    
            }).then((res)=>{
                console.log(res)
            })
        } catch (error) {
            console.log(error)
        }
    }

    async getCurrentUser(){
        try {

            return await axios.get("http://localhost:8080/api/v1/users/current-user").then((res)=>{
                console.log(res)
            
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    async Logout(token){
        
        try {
            const authaxios = axios.create({
                baseURL: "http://localhost:8080/api/v1/",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return await authaxios.post("/users/logout")
            
        } catch (error) {
            console.log(error)
        }
    }

    async Login(username, password){
        try {
            

             return await axios.post("http://localhost:8080/api/v1/users/login",{
                password: password,
                username: username})
            // }).then((res)=>{
            //     console.log('login was done with data below',res.data.data.user.username)
            //     return res.data.data.user
               
            // })


            
            
        } catch (error) {
            console.log(error)
        }
    }

    async getCurrentUser(token){
        try {
            const authaxios = axios.create({
                baseURL: "http://localhost:8080/api/v1/",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return await authaxios.get("/users/current-user")
            
        } catch (error) {
            console.log(error)
        }
    
    }

    async createChat(token,receiverId){
        try {
            const authaxios = axios.create({
                baseURL: "http://localhost:8080/api/v1/",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return await authaxios.post(`/chat-app/chats/c/${receiverId}`)
            
        } catch (error) {
            console.log(error)
        }
    }

    async sendMessage(token,chatId,messageObject){
        try {
            const authaxios = axios.create({
                baseURL: "http://localhost:8080/api/v1/",
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                    
                },
            });

            const formData = new FormData();
            formData.append('content', messageObject.content);

            if(messageObject.attachments){
                messageObject.attachments.forEach((attachment)=>{
                    formData.append('attachments',attachment)
                })
            
            }
            else{
                formData.append('attachments','')
            
            }

            for(let pair of formData.entries()){
                console.log(pair[0]+ ', '+ pair[1]); 
            }

            return await authaxios.post(`/chat-app/messages/${chatId}`,formData)
            
        } catch (error) {
            console.log(error)
        }
    }

async createGroupChat(token){
    try {
        
        const authaxios = axios.create({
            baseURL: "http://localhost:8080/api/v1/",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return await authaxios.post(`/chat-app/chats/group`,{
            
                name: "discussion group",
                participants: [
                  "66865d7a4ac14e550ea5cc0f",
                  "6686814f4ac14e550ea5cd93"
                ]
              
        })
        
    } catch (error) {
        console.log(error)
    }
}

    async getAllChats(token){
        try {
            const authaxios = axios.create({
                baseURL: "http://localhost:8080/api/v1/",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return await authaxios.get("/chat-app/chats")
            
        } catch (error) {
            console.log(error)
        }
    }

    async getMessages(token,chatId){
        try {
            const authaxios = axios.create({
                baseURL: "http://localhost:8080/api/v1/",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return await authaxios.get(`/chat-app/messages/${chatId}`)
            
        } catch (error) {
            console.log(error)
        }
    }

}
const service = new Service();
export default service;