import {add_clr_Type,add_js_Type,del_clr_Type,del_js_Type,login,logout } from "./types";

export const addItemColor=(data=null)=>{
   if(data){
       return {
           type:add_clr_Type,
           payload:data
       }
   }
}

export const delItemColor=(data=null)=>{
    if(data){
        return{
            type:del_clr_Type,
            payload:data
        }
    }
}


export const addItemJS=(data=null)=>{
    if(data){
        return {
            type:add_js_Type,
            payload:data
        }
    }
 }
 
 export const delItemJS=(data=null)=>{
     if(data){
         return{
             type:del_js_Type,
             payload:data
         }
     }
 }

 export const isLogin=()=>{
         return{
             type:login,
             payload:true
         }
 }

 export const isLogout=()=>{
     return{
         type:logout,
         payload:false
     }
 }