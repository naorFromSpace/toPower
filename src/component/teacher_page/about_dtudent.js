import Footer from '../footer';
import Navbar from '../navber';
import Determination from '../student_page/determination_and_cancellation';
import ProgressStodent from "./progress_student"
import LessonForStudent from "./LessonForStudent"
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import axios from 'axios';




export default function AboutStudent() {
  const navigate = useNavigate();
  const params = useParams();
  let email = params.email;
  let [progression,setprogression] = useState(0);
  let [lessonNumber,setlessonNumber] = useState(0);
  let [avilDate,setavilDate] = useState([]);


  const card_style = {
    width: "450px",
    padding: '15px',
    margin: '30px',
    boxShadow: '20px 20px 40px rgba(60,60,150,0.25)'
  }

  const main_container = {
    justifyContent: 'space-around',
    margin: 'auto',
    marginTop: '30px',

  }

  const sendServer = async(_body) => {
    let url = "http://localhost:3001/user/Edit/" + email;
    try {
        let resp = await axios({
            url,
            method: "PUT",
            data: _body

        })
        
        
    }
    
    catch (err) {
        console.log(err)
        alert("failed to upload")
    }

  }

  const sendLesson = async (_body) => {
    
    let url = "http://localhost:3001/user/Edit/" + email;
    try {
        let resp = await axios({
            url,
            method: "PUT",
            data: _body

        })
        window.location.reload(false);
        
    }
    
    catch (err) {
        console.log(err)
        alert("failed to upload")
    }



  }


  useEffect(() => {

    doApi();

  },[])


const doApi = async() => {

  let url = "http://localhost:3001/user/" + email;
  try {
      let resp = await axios({
          url,
          method: "GET",

      })
   
      setprogression(resp.data[0].progression)
      setlessonNumber(resp.data[0].lessonNumber)
      setavilDate(resp.data[0].next_Lesson)
  }
  
  catch (err) {
      console.log(err)
      alert("failed to upload")
  }

}


  const nav_list = [
    {
      name: 'mein page',
      link: '/'
    },
    // {
    //   name: 'add products',
    //   link: '#'
    // },
    {
      name: 'your account',
      link: '/YourAccunt'
    },
   
  ]


  return (
    <div>
      <Navbar nav_list={nav_list} />
      <div className='row' style={main_container}>
        <Determination  sendLesson = {sendLesson} email = {email}/>
        <ProgressStodent progression = {progression} setprogression = {setprogression} lessonNumber = {lessonNumber} setlessonNumber = {setlessonNumber}  sendServer = {sendServer} />
        <LessonForStudent   avilDate = {avilDate}  email = {email}/>
      </div>
      <Footer />
    </div>

  )
}