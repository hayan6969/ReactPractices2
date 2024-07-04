
export class Service {

async getUserChatList(){
    const response = await fetch("https://localhost:8080/api/v1/chat-app/chats");
    const data = await response.json();
    return data;
}
async getAvailableUsers(){
    const response = await fetch("https://localhost:8080/api/v1/chat-app/chats/users");
    const data = await response.json();
    return data;

}
async createOrGetChatRoom(receiverId){
    const response = await fetch(`https://localhost:8080/api/v1/chat-app/chats/c/${receiverId}`);
    const data = await response.json();
    return data;

}

async deleteChatRoom(chatId){
    const response = await fetch(`https://localhost:8080/api/v1/chat-app/chats/remove/${chatId}`)
    const data = await response.json();
    return data;
}

async signUp(email,password,role="Admin",username){
    
}


}
const service = new Service();
export default service;