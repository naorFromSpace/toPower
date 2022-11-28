import React from 'react'
import { useForm } from "react-hook-form";
import Footer from './footer';
import Navbar from './navber';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function Register() {
    
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
   
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSub = (bodydata) => {
        doPostApi(bodydata);
    }

    const doPostApi = async (_body) => {

        let url = "http://localhost:3001/user";
        try {
            let resp = await axios({
                url,
                method: "POST",
                data: _body

            })
            alert("please Login")
            navigate('/login')
           
         

        }

        catch (err) {
            console.log(err)
            alert("email alredy exites or another problem")
        }
    }

    return (
    <div >  
         <Navbar nav_list={nav_list}/>
       
        <div className='container mb-5'>
            <h1 className='mx-auto text-center'>Register</h1>
            <form style={card_style}  className='col-6  p-5 mx-auto rounded w-75' onSubmit={handleSubmit(onSub)}  >
                <label>Name:</label>
                <input {...register("name", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.name && <div className='text-danger d-block'> min 2 chars </div>}
                <label>Email:</label>
                <input  {...register("email", { required: true, minLength: 2, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="text" className='form-control' />
                {errors.email && <div className='text-danger d-block'> Enter Valid Email </div>}
                <label>Pass:</label>
                <input {...register("pass", { required: true, minLength: 6 })} type="password" className='form-control' />
                {errors.pass && <div className='text-danger d-block'> min 6 chars </div>}
                <label>Age:</label>
                <input {...register("age", { required: true,min:1,max:99})} type="number" className='form-control' />
                {errors.age && <div className='text-danger d-block'>from 1 to 99</div>}
                <label>Gender:</label>
                <select {...register("gender", { required: true,})} className="form-select">
                    <option value=""></option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="other">other</option>
                </select>
                {errors.gender && <div className='text-danger d-block'>Required</div>}
                <label>User Type:</label>
                <select {...register("usertype", { required: true })} className="form-select">
                    <option value=""></option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="parent">Parent</option>
                </select>
                {errors.gender && <div className='text-danger d-block'>Required</div>}
                <div className='d-flex justify-content-between mt-4'>
                    <button className='btn btn-info  mt-2'>Log in</button>
                    <Link to="/Login" className='h6 ms-4'>Already registered ? Log in here</Link>
                </div>
                
            </form>
        </div>
        <Footer />
        </div> 
    )
}

export default Register