import Navbar from "../navber"
import Footer from "../footer"
import AllStudents from "./all_students"
import axios from "axios"
import { useEffect, useState } from "react"
import { GraphDownArrow } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

const card_style = {
  width: "350px",
  padding: '15px',
  margin: '30px',
  boxShadow: '20px 20px 40px rgba(60,60,150,0.25)',
}
const main_container = {
  justifyContent: 'space-around',
  margin: 'auto',
  marginTop: '30px',
  justifyContent: 'space-around',
  textAlign: ' center'
}

export default function TeacherMainPage() {
  let [Ar,setAr] = useState([]);
  const nav_list = [
    {
      name: 'main page',
      link: '/'
    },
    {
      name: 'add products',
      link: '#'
    },
    {
      name: 'your account',
      link: '/YourAccunt'
    },
    {
      name: 'messege',
      link: '#'
    },
  ]


  useEffect(() => {

    doApi();


  }, []);

  const doApi = async () => {


    let url = "http://localhost:3001/user/student/getallStudent";
    try {
      let resp = await axios({
        url,
        method: "GET",

      })
      setAr(resp.data);
    }

    catch (err) {
      console.log(err)
      alert("problem")
    }

  }

let list = Ar.map((item,i) => {
  return(
       <div className="mb-5" style={card_style} >
          <Link to={"/AboutStudent/" + item.email} className="card-title" style={{ textDecoration: 'none' }}>{item.name} {item.email}</Link>
          <Link to={"/AboutStudent/" + item.email} className="btn mt-3" style={{ backgroundColor: '#b2fcf1' }}>Button</Link>
        </div> 
      )
    })

  return (
    <div >
      <Navbar nav_list={nav_list} />
        <div style={main_container} className="container d-flex justify-content-around row">{list}</div>
      <Footer />
    </div>)
}