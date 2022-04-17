import {add_clr_Type,add_js_Type,del_clr_Type,del_js_Type,login,logout } from "./types";
let intialData=[];
let initalData2=false;

export const dropdwn_clr_Reducer=(state=intialData,action)=>{
    switch(action.type){
        case add_clr_Type:
            if(Array.isArray(action.payload)){
                return [...action.payload];
            }
            else{
                if(!state.includes(action.payload)){
                    state=[...state,action.payload];
                    return state;
                }
                
            
        }
        break;
        case del_clr_Type:
              if(Array.isArray(action.payload)){
                  return [];
              }
              else{
                  state=state.filter(val=>{if(val!==action.payload){return val}});
                  return state;
              }
        
      default:return state;
    }
}

export const dropdwn_JS_Reducer=(state=intialData,action)=>{
    switch(action.type){
        case add_js_Type:
            if(Array.isArray(action.payload)){
                return [...action.payload];
            }
            else{
                if(!state.includes(action.payload)){
                    state=[...state,action.payload];
                    return state;
                }
                
            }
        
        break;
        case del_js_Type:
              if(Array.isArray(action.payload)){
                  return [];
              }
              else{
                  state=state.filter(val=>{if(val!==action.payload){return val}});
                  return state;
              }
        
      default:return state;
    }
}

export const AuthReducer=(state=initalData2,action)=>{
               switch(action.type){
                 case login:
                     alert(action.payload);
                     state=action.payload;
                     return state;
                 
                 case logout:
                     state=action.payload;
                     return state;
                 

                 default: return state;

               }
}