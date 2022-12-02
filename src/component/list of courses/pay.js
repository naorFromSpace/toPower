import ListOfCourses from "./list_of_courses"
import React from 'react'
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from "../navber";
import Footer from "../footer";
import { PayPalButton } from "react-paypal-button-v2"
import axios from "axios";
import { getDefaultNormalizer } from "@testing-library/react";



function Pay() {

  const params = useParams();
  const navigate = useNavigate();
  let id = params.corseNumber;
  let [email1,setemail1] = useState();
  let [usertype,setusertype] = useState();
  let [name,setname] = useState();

  useEffect(() => {

    getdet();
  }, [])

  const getdet = async() => {
    let url = "http://localhost:3001/user/userinfo";
    try {
      let resp = await axios({
        url,
        method: "GET",
        headers: {
          "x-api-key": localStorage["user"],
          'content-type': "application/json"
        }
      })

      setemail1(resp.data.email);
      setusertype(resp.data.usertype);
      setname(resp.data.name);
    }

    catch (err) {
      console.log(err)
      alert("token Expired")
    }

  }


  const nav_list = [
   
    {
      name: 'products',
      link: '/AppProduct'
    },
     
  ]

  const card_style = {
    padding: '15px',
    marginTop: '40px',
    boxShadow: '20px 20px 40px rgba(60,60,150,0.25)',
    marginBottom: '40px',
  }
  const main_container = {
    justifyContent: 'center',


  }

  const confirmPay = async () => {


    let url = "http://localhost:3001/user/Edit/" + email1;
    try {
      let resp = await axios({
        url,
        method: "PUT",
        data: {
          paid: "true"
        }

      })
      navigate('/thankyou')

    }

    catch (err) {
      console.log(err)
      alert("email alredy exites or another problem")
    }


  }






  return (

    <div>
      <Navbar nav_list={nav_list} />
      <div style={main_container} className="container ">
        <div style={card_style} className='w-75 text-center mt-6  rounded mx-auto'>
          <div className="text-center container">
            <div className="card-body">
              <h5 className="card-title mt-3">your name :{name} </h5>
              <h5 className="card-title mt-3">your email :{email1}</h5>
              <h5 className="card-title mt-3">you are : {usertype}</h5>
              <p class="card-text my-3">the price is : 202</p>
              {/* <Link className="btn btn-outline-info" to={'/Pay'} state={{backgroundColor: 'blue'}}>Confirmation <br></br> and  payment</Link> */}

            </div>
          </div>
          <PayPalButton
            currency="ILS"
            amount="0.01"
            options={{
              clientId: "ASxkTvhIUMEmd07zaDrnc7SkbNUqoqoGVSc7eM8HxXcPy0wIJSARpaAQ9m1jsYQAltQ62eJpMvhkDRp_"
            }}
            onSuccess={(details, data) => {
              console.log(details);
              console.log(data);
              if (details.status === "COMPLETED") {
                confirmPay();
              }
            }}
            onCancel={(err) => {
              console.log(err);
              alert("The payment process been canceld, try again")
            }}
          />
        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Pay

