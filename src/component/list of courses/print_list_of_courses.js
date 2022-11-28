import ListOfCourses from "./list_of_courses"
import { Link } from "react-router-dom"

export default function PrintListOfCourses(props){
    function limit (string = '', limit = 100) {  
        return string.substring(0, limit)+ ' ...'
      }

      const card_style={
        width:"450px" ,
        padding:'15px',
        margin: '30px',
        boxShadow:'20px 20px 40px rgba(60,60,150,0.25)' 
      }
      const main_container={
        justifyContent: 'space-around',
        margin: 'auto',
        marginTop: '30px',
      
      }

     return (
        <div className="container  row  " style={main_container}>
        {ListOfCourses.map((cours,i) => {
          return (
            <div key={cours.title} className=" no-gutters  rounded mb-5" style={card_style} >
                <div className="">
                  <img src={cours.image} class="card-img w-100" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                    <h5 className="card-title">{cours.title}</h5>
                    <p class="card-text">{limit(cours.about,100)}</p>
                </div> 
                <p className="card-text d-flex justify-content-around">
                    <small className="text-muted">price : {cours.price}</small>
                    <Link className="btn btn-info mt-3 mb-1" to={"./AboutCourse/" + i}>Link</Link>
                </p>
                </div>
            </div>
          );
        })}
        </div>
     )
}
