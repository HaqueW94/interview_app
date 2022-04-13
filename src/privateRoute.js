import React from "react";
import { Navigate} from "react-router-dom";
import { AuthContext } from "./context";
 
export default function PrivateRoute({children}){
    const{isLogin}=React.useContext(AuthContext);
    if(isLogin){
        return children;
    }
    return <Navigate to="/login" replace={false}/>
    
}