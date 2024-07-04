import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    userData:null,
    token:null,
    chatId:null,
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload.user;
            state.token=action.payload.accessToken;
        },
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        },
        setChatId:(state,action)=>{
            state.chatId=action.payload;

    }}
})

export default authSlice.reducer;
export const {login,logout,setChatId}=authSlice.actions;