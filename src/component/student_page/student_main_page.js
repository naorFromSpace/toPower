
import Footer from '../footer'
import Navbar from '../navber'
import Determination from './determination_and_cancellation.js'
import Progress from './progress'


export default function MainStudentPage(props){

  const main_container={
    justifyContent: 'space-around',
    margin: 'auto',
    marginTop: '30px',
  
  }

  const nav_list=[
    {
     name:'mein page',
     link:'/'                 
     },
     {
      name:'products',
      link:'#'
    },
    {
      name:'your progress',
      link:'/ProgressMainCard' 
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

<div className="container row"style={main_container}>
 
  <Determination/>
     <Progress/>

</div>
  

    <Footer/>  
 </div> 
   )
}