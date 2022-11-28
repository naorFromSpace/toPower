import ListOfCourses from "./list_of_courses"
import React from 'react'
 import { useParams ,Link } from 'react-router-dom';
import Navbar from "../navber";
import Footer from "../footer";


function Pay() {

  const params = useParams();
  let id = params.corseNumber;
 
  const nav_list=[
    {
     name:'Our courses',
     link:'/TeacherMainPage'                 
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

  const card_style={
    padding:'15px',
    marginTop: '40px',
    boxShadow:'20px 20px 40px rgba(60,60,150,0.25)' ,
    marginBottom: '40px',
  }
  const main_container={
    justifyContent: 'center',
  
    
  }
 
  return (
  
    <div>
      <Navbar nav_list={nav_list}/>
           <div style={main_container} className="container ">
              <div style={card_style} className='w-75 text-center mt-6  rounded mx-auto'>
              <div className="text-center container">
                    <div className="card-body">
                    <h5 className="card-title mt-3">your nmae :  </h5>
                    <h5 className="card-title mt-3">your email : </h5>
                    <h5 className="card-title mt-3">you are : </h5>
                    <p class="card-text my-3">the prise is :</p>
                    <Link className="btn btn-outline-info" to={'/Pay'} state={{backgroundColor: 'blue'}}>Confirmation <br></br> and  payment</Link>
                </div> 
               </div>             
              </div>
           </div>
      
      <Footer />

    </div>
  )
}

export default Pay

