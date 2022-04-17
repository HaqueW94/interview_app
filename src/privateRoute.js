import React from "react";
import { Navigate} from "react-router-dom";
import { useSelector } from 'react-redux';
 
export default function PrivateRoute({children}){
    const auth=useSelector(state=>state.auth);
    if(auth){
        return children;
    }
    return <Navigate to="/login" replace={false}/>
    
}