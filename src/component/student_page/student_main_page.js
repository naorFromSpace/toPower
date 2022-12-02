
import Footer from '../footer'
import Navbar from '../navber'
import Determinationstudent from './determnationstudent'
import LessonTime from './LessonTime'
import Progress from './progress'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'



export default function MainStudentPage(props) {
  const navigate = useNavigate();
  let [progression,setprogression] = useState()
  let [email,setemail] = useState();
  let [avilDate,setavilDate] = useState([]);
  // let prvtime = [];
  const main_container = {
    justifyContent: 'space-around',
    margin: 'auto',
    marginTop: '30px',

  }

  const nav_list = [
    {
      name: 'products',
      link: '/AppProduct'
    },
    // {
    //   name: 'your progress',
    //   link: '/ProgressMainCard'
    // },
    {
      name: 'your account',
      link: '/YourAccunt'
    },
    {
      name: 'messege',
      link: '/messege'
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
      setprogression(resp.data.progression);
      setemail(resp.data.email)
      setavilDate(resp.data.next_Lesson)
    }

    catch (err) {
      console.log(err)
      alert("token Expired")
    }


  }


  const sendLesson = async (_body) => {
    console.log(_body);
        let url = "http://localhost:3001/user/Edit/" + email;
        try {
            let resp = await axios({
                url,
                method: "PUT",
                data: _body
    
            })
         console.log(resp.data)
         navigate("/");
            
        }
        
        catch (err) {
            console.log(err)
            alert("failed to upload")
        }
    
    
    
      }



  return (
    <div>
      <Navbar nav_list={nav_list} />

      <div className="container row" style={main_container}>

        <Determinationstudent email = {email} sendLesson  = {sendLesson }/>
        <Progress  progression ={progression}/>
        
          <LessonTime avilDate = {avilDate} email = {email}/>
       
      </div>


      <Footer />
    </div>
  )
}