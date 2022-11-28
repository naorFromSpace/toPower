import Navbar from "../navber"
import Footer from "../footer"
import AllStudents from "./all_students"


export default function TeacherMainPage(){
    const nav_list=[
        {
         name:'mein page',
         link:'/'                 
         },
         {
          name:'add products',
          link:'#'
        },
        {
            name:'your account',
            link:'/YourAccunt' 
          },
          {
            name:'messeg',
            link:'#' 
          },
      ] 
      
      
      return (
      <div > 
          <Navbar nav_list={nav_list}/>
           
            <AllStudents />
  
        <Footer/>  
     </div> )
}