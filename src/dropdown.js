import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function Dropdown({arrData,addItem,delItem,data,name}){
    const dispatch=useDispatch();
    const chckItems=data;
    const [menuItem,setMenuItem]=React.useState(arrData);
    const[open,setOpen]=React.useState(false);
    const [check,setCheck]=React.useState(false);
    const [shwMenu,setShwMenu]=React.useState('block');

    

    const handleCheck=(e)=>{
        if(e.target.checked){
         if(Array.isArray(JSON.parse(e.target.value))){
             setCheck(true);
             setOpen(false);
            return dispatch(addItem(JSON.parse(e.target.value)));
         }
            setCheck(false);
            setOpen(false);
            return dispatch(addItem(JSON.parse(e.target.value)));
             
        }
         
        if(!e.target.checked){
            if(Array.isArray(JSON.parse(e.target.value))){
                setCheck(false);
            }
              setOpen(false);
              return  dispatch(delItem(JSON.parse(e.target.value)));
        }
               
    }


    const handleSrch=(e)=>{
        if(e.target.value!==''){
          let arr1=menuItem.filter(vl=>{if(vl.includes(e.target.value)){return vl}});
          setMenuItem(arr1);
          setShwMenu('none');
        }
        else{
            setMenuItem(arrData)
            setShwMenu('block');
        }
    }
return(
<>

    <Button id='drpbtn' className='my-4' onClick={(e)=>{setOpen(!open);setMenuItem(arrData);setShwMenu('block')}}>Dropdown {name}</Button><br/>
    {open?<div style={{width:'250px',backgroundColor:'#ecf0f1'}} className='border'>
          <input type='text'className='w-100 py-1' placeholder='search...' onChange={handleSrch}/>
          <div className='py-2 px-1 data_item' style={{display:shwMenu}}><input type='checkbox' defaultChecked={check} className='me-2' value={JSON.stringify(arrData)} disabled={chckItems?.length===0?false:!check} onClick={handleCheck}/><label>Select All</label></div>
          {menuItem?.map((val,index)=>{return <div key={index} className='data_item py-2 px-1'><input type='checkbox' className='me-2' defaultChecked={chckItems?.includes(val)&&!check?true:false} disabled={chckItems?.length===0?false:check} value={JSON.stringify(val)} onClick={handleCheck}/><label>{val}</label></div>})}
      </div>:null}
</>
)
}