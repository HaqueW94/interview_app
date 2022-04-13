import React from "react";
export const AuthContext=React.createContext();
export default function Context({children}){
    const[isLogin,setIsLogin]=React.useState(false);
    const handleLogin=()=>{
        setIsLogin(!isLogin)
    }

   return(
    <AuthContext.Provider value={{isLogin,handleLogin}}>
    {children}
</AuthContext.Provider>
   )
}