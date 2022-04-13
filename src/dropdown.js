import React from 'react';
import { Button } from 'react-bootstrap';

export default function Dropdown({arrData}){
   
    let arr=arrData;
    const [data,setData]=React.useState(arr);
    const[open,setOpen]=React.useState(false);
    let[dis,setDis]=React.useState(false);
    let[disAll,setDisAll]=React.useState(false);
    let [shw,setShw]=React.useState('block');
    let arr2=[];
    const chck=(e)=>{
        if(e.target.checked){
            if(e.target.value=='all'){
                setDis(true);
                setDisAll(false)
                arr2=[...data];
                return alert(arr2);
            }
            arr2.push(e.target.value);
            setDis(false);
            setDisAll(true);
            return alert(arr2);
        }
        
            if(e.target.value=='all'){
                setDis(false);
                setDisAll(false);
                arr2=[];
                return alert(arr2);
            }
            arr2=arr2.filter(val=>{if(val!=e.target.value){return val}});
            if(arr2?.length===0){setDisAll(false)}
             return alert(arr2);
        
        
    }

    const handleSrch=(e)=>{
        let value=e.target.value;
        if(value!=''){
          let arr1=data.filter(vl=>{if(vl.includes(value)){return vl}})
          setData(arr1);
          setShw('none');
        }
        else{
            setData(arr)
            setShw('block')
        }
    }
return(
<>

    <Button id='drpbtn' className='my-4' onClick={(e)=>{setOpen(!open);}}>Dropdown </Button><br/>
    {open?<div style={{width:'250px',backgroundColor:'#ecf0f1'}} className='border'>
          <input type='text'className='w-100 py-1' placeholder='search...' onChange={handleSrch}/>
          <div className='py-2 px-1 data_item' style={{display:shw}}><input type='checkbox' className='me-2' value='all' disabled={disAll} onClick={chck}/><label>Select All</label></div>
          {data?.map((val,index)=>{return <div key={index} className='data_item py-2 px-1'><input type='checkbox' className='me-2' disabled={dis} value={val} onClick={chck}/><label>{val}</label></div>})}
      </div>:null}
</>
)
}