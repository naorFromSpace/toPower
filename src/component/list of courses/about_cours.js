import ListOfCourses from "./list_of_courses"
import React from 'react'
import { useParams, Link } from 'react-router-dom';
import Navbar from "../navber";
import Footer from "../footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function About_cours() {
  const navigate = useNavigate();
  const params = useParams();
  let id = params.corseNumber;
  const nav_list = [
    {
      name: 'Our courses',
      link: '/TeacherMainPage'
    },
    {
      name: 'products',
      link: '/AppProduct'
    },
    {
      name: 'log in',
      link: '/Login'
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

  const goPay = async() => {


    if (localStorage["user"]) {
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
      navigate('/pay')

    }

    catch (err) {
      console.log(err)
      alert("token Expired")
 

  }
}
else
alert("please login")
}
  return (

    <div>
      <Navbar nav_list={nav_list} />
      <div style={main_container} className="container">
        <div style={card_style} className='w-100  text-center mt-6 mb-6 rounded'>
          <div className="mx-auto">
            <img src={ListOfCourses[id].image} class="card-img w-75 rounded" alt="..." />
          </div>
          <div className="text-center container">
            <div className="card-body">
              <h5 className="card-title mt-3">{ListOfCourses[id].title}</h5>
              <p class="card-text my-3">{ListOfCourses[id].about}</p>
              {/* <Link to="/Pay" className="btn btn-info mt-3">Pay</Link> */}
              <button onClick={() => {
                goPay();
              }} className="btn btn-info mt-3">Pay</button>
            </div>
          </div>


        </div>
      </div>

      <Footer />

    </div>
  )
}

export default About_cours

