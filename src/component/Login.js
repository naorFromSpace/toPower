import React from 'react'
import { useForm } from "react-hook-form"
import { Link ,useNavigate} from 'react-router-dom';
import Footer from './footer';
import axios from 'axios';
import Navbar from './navber';



function Login() {

   

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const nav_list=[
        {
         name:'main page',
         link:'/'                 
         },
      ] 
      
      const card_style={
        margin: '30px',
        boxShadow:'20px 20px 40px rgba(60,60,150,0.25)' 
      }


    const onSub = (bodydata) => {

        
        doPostApi(bodydata);

    }

    const doPostApi = async (_body) => {

        let url = "http://localhost:3001/user/login";
        try {
            let resp = await axios({
                url,
                method: "post",
                data: _body

            })
            console.log(resp.data.user.usertype)
            localStorage.setItem("user",resp.data.token);
            if (resp.data.user.usertype === "student"){
            navigate('/');
            
        }
        else if (resp.data.user.usertype === "teacher"){
            navigate('/');
            
        }
        }

        catch (err) {
            console.log(err)
            alert("email or password incorrect")
        }


    }

    return (
      <div>
        <Navbar nav_list={nav_list}/> 
        <div className='container mb-5 '>
            <h1 className='mx-auto text-center'>Log in</h1>
            <form style={card_style}  className='col-6  p-5 mx-auto rounded w-75' onSubmit={handleSubmit(onSub)}  >
                <label>Email:</label>
                <input  {...register("email", { required: true, minLength: 2, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="text" className='form-control' />
                {errors.email && <div className='text-danger d-block'> Enter Valid Email </div>}
                <label>Pass:</label>
                <input {...register("pass", { required: true, minLength: 6 })} type="password" className='form-control' />
                {errors.pass && <div className='text-danger d-block'> min 6 chars </div>}
                <div className='d-flex justify-content-between mt-4'>
                    <button className='btn btn-info text-center mt-2'>Log in</button>
                    <Link to="/register" className='h6 ms-4'>Not Registerd? Register Here</Link>
                </div>
            </form>
        </div>
        <Footer/>
     </div>
    )
}

export default Login