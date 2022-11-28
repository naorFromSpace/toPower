import Footer from "./footer";
import Navbar from "./navber";
import logo from './main_page/img/logo.png'
import StudentDetailObject from'./student_page/stodent_details_object'

export default function YourAccunt(){
     
    

    const container={
        maxWidth: '700px',
        backgroundColor:'#ffffff',
        borderRadius:'8px',
        boxShadow:'20px 20px 40px rgba(60,60,150,0.25) ',
        display:'flex',
        placeItems:'center',
        marginBottom: '80px',
        marginTop:'80px',
       backgroundColor:'#f2fcff',
      
    }

    const nav_list=[
        {
         name:'main mapg',
         link:'/'                 
         },
         {
          name:'products',
          link:'#'
        },
        {
          name:'log in',
          link:'/Login' 
        },
      ] 
  console.log (StudentDetailObject.name)
    return(
      
       <div >
        <Navbar nav_list={nav_list}/>
        <div className="container p-5  "  style={container}>
             
                 <div >
                    <div className="card-body ">
                        <h6>hi {StudentDetailObject.userType} : {StudentDetailObject.name}</h6>
                        <h6 >your email : {StudentDetailObject.email}</h6>
                    </div>
                 </div>
             </div>
        
      

        <Footer />
       </div> 
    )


}