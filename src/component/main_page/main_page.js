
import PrintListOfCourses from '../list of courses/print_list_of_courses'
import Navbar from '../navber'
 import Footer from '../footer'
 import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function MainPage(props){
  const navigate = useNavigate();
  const nav_list=[
    {
     name:'Our courses',
     link:'/'                 
     },
     {
      name:'products',
      link:'/AppProduct'
    },
    {
      name:'log in',
      link:'/Login' 
    },
  ] 
  
  useEffect(() => {

    if (localStorage["user"]) {
      doApi();

    }

  }, []);


  const doApi = async () => {

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
      if (resp.data.usertype === "student")
      navigate('/registermainpage');
      else if (resp.data.usertype === "teacher")
      navigate('/TeacherMainPage');

    }

    catch (err) {
      console.log(err)
      alert("token Expired")
    }


  }




  return (
  <div> 
      <Navbar nav_list={nav_list}/>
      <PrintListOfCourses /> 
      <Footer/>
 </div> 
   )
}