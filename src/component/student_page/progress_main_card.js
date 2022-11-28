import Footer from "../footer";
import Navbar from "../navber";
import Progress from "./progress";
import AllProgress from "./all_progress";



export default function ProgressMainCard(props){
    const nav_list=[
        {
         name:'Our courses',
         link:'#'                 
         },
         {
          name:'products',
          link:'#'
        },
        {
          name:'log in',
          link:'#' 
        },
      ] 
      


    return(
    <div >
      <Navbar nav_list={nav_list}/>
      <div className="container">
          <div  className="d-flex justify-content-around">
            <Progress/>
            <AllProgress/>
          </div>
        </div>
      <Footer/>
    </div>
    );
}