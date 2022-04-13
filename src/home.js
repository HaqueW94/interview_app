import React from 'react';
import Dropdown from './dropdown';
import { Button } from 'react-bootstrap';
import { AuthContext } from './context';

export default function Home(){
    const {handleLogin}=React.useContext(AuthContext);    let arr1=['red','green','blue'];
    let arr2=[{title:'react',id:'react'},{title:'Angular',id:'angular'},{title:'vue',id:'vue'}]
return(
<>
  <nav className='p-2 d-flex bg-light justify-content-between shadow align-items-center w-100'>
      <h5>Demo-app</h5>
      <Button onClick={()=>handleLogin()}>Logout</Button>
  </nav>
  <main className='p-3'>
    <div>
        <h3>select dropdown color menu</h3>
        <Dropdown arrData={arr1}/>
        <Dropdown arrData={arr2.map(val=>{return val.title})}/>
        
    </div>
  </main>
</>
)
}