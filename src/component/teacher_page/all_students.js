import StudentDetailObject from'../student_page/stodent_details_object'

const card_style={
  width:"250px" ,
  padding:'15px',
  margin: '30px',
  boxShadow:'20px 20px 40px rgba(60,60,150,0.25)' ,
}
const main_container={
  justifyContent: 'space-around',
  margin: 'auto',
  marginTop: '30px',
  justifyContent: 'space-around',
  textAlign:' center'
}
 
export default function AllStudents(props) {
    const list = StudentDetailObject.list_of_students;
    
     const listItems = list.map((student) =>
     <div class="mb-5" style={card_style} >
       <a class="card-title" style={{textDecoration: 'none'}}>{student}</a>
       <a href="/AboutStudent" class="btn  mt-3" style={{  backgroundColor:'#b2fcf1'}}>Button</a>
   </div>
     
    
     );
    return (
      <div className="container  row" style={main_container}>{listItems}</div>
   
    );
  }