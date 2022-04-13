import React from 'react';
import { Container,Button} from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { AuthContext } from './context';
import {useNavigate} from 'react-router-dom';

export default function Login(){
    const {handleLogin}=React.useContext(AuthContext);
    const [open,setOpen]=React.useState(false);
    const navigate=useNavigate();
    const chckPsswrd=(numb)=>{
        let sum=0;
        let n1=numb;
        while(n1!=0){
            sum+=Math.floor(n1%10);
            n1=Math.floor(n1/10);
        }
        return sum;
    }
    const formik=useFormik({
        initialValues:{email:'',password:''},
        validationSchema:yup.object({
            email:yup.string().email('not a valid email').required('* Required Field'),
            password:yup.string().matches(/^[0-9]{4}$/g,'only 4 digits').required('* Required Field')
        }),
        onSubmit:values=>{
             if(chckPsswrd(values.password)==10){
                 setOpen(false);
                 handleLogin();
                 formik.resetForm();
                 return navigate('/')
             }
             setOpen(true);
            
        }
    })
return(
<>
<Container className='d-flex justify-content-center align-items-center vh-100'>
   <div className='border form-wrapper border-secondary'>
       <h1 className='h4 text-center my-3'>LogIn</h1>
       <form className='my-3' onSubmit={formik.handleSubmit}>
           <div className='my-3'>
             <input type='text' {...formik.getFieldProps('email')} autoComplete='off' className='w-100 py-1 mt-2' name='email' placeholder='Enter Email'/>
             {formik.touched.email&&formik.errors.email?<h6 className='errText'>{formik.errors.email}</h6>:null}
           </div>
           <div className='my-3'>
             <input type='password' {...formik.getFieldProps('password')} autoComplete='off'  className='w-100 py-1 mt-2' name='password' placeholder='Enter Password'/>
             {formik.touched.password&&formik.errors.password?<h6 className='errText'>{formik.errors.password}</h6>:null}
             {open?<h6 className='errText'>Wrong Password</h6>:null}
           </div>
           <Button type='submit' className='w-100 my-3'>Login</Button>
       </form>
   </div>
</Container>
</>
)
}