import React from 'react';
import Dropdown from './dropdown';
import { Button } from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { addItemColor,delItemColor,addItemJS,delItemJS,isLogout } from './redux/action';
export default function Home(){
    let arr1=['red','green','blue'];
    let arr2=[{title:'react',id:'react'},{title:'Angular',id:'angular'},{title:'vue',id:'vue'}]
    const dispatch=useDispatch();
    const drpwnData1=useSelector((state)=>state.drp_clr_Data);
    const drpwnData2=useSelector((state)=>state.drp_js_Data);
  
return(
<>
  <nav className='p-2 d-md-flex bg-light justify-content-between shadow align-items-center w-100'>
      <h5>Demo-app</h5>
      <Button onClick={()=>{dispatch(isLogout());dispatch(addItemColor([]));dispatch(addItemJS([]))}}>Logout</Button>
  </nav>
  <main className='p-3 d-flex justify-content-between'>
    <div className='my-2'>
        <h3>select dropdown color from menu</h3>
        <Dropdown arrData={arr1} addItem={addItemColor} delItem={delItemColor} data={drpwnData1} name='color' />
         {drpwnData1?.map((obj,index)=>{return <h5 key={index} style={{color:obj}}>{obj}</h5>})}
    </div>
    <div className='my-2'>
        <h3>select dropdown JS from menu</h3>
        <Dropdown arrData={arr2.map(val=>{return val.title})} addItem={addItemJS} delItem={delItemJS} data={drpwnData2} name='JS' />
         {drpwnData2?.map((obj,index)=>{return <h5 key={index}>{obj}</h5>})}
    </div>
  </main>
</>
)
}