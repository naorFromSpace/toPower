import styles from '../student_page//mystyle.module.css'; 
import Stodentdetailsobject from '../student_page/stodent_details_object';

export default function ProgressStodent(){
   
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
 return(
      <div className={styles.wow}>
         <div className="container">
            <div className="d-flex justify-content-center mx-auto">
               <span class="input-group-text border border-warning">lesson number</span>
               <input type="number" class="form-control border border-info" value={Stodentdetailsobject.lesson_nambe}/>
            </div>
            <div className="d-flex justify-content-center mx-auto mt-4">
               <span class="input-group-text border border-info">pogresion</span>
               <input type="number" class="form-control border border-warning" value={Stodentdetailsobject.lesson_nambe}/>
            </div>
             <a className="  mt-5" style={{  background:' linear-gradient( rgba(0,0,255 ,0.7),  rgba(250,250,11,1)',  textDecoration: 'none'}}>send</a>
        </div>
      </div>  
 )
      
}