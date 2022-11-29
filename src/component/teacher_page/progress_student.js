import styles from '../student_page//mystyle.module.css'; 


import { useEffect,useRef } from 'react';

export default function ProgressStodent(props){
   let progressRef = useRef();
   let lessonRef = useRef();
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

const setNow = () => {

   props.setprogression(progressRef.current.value);
   props.setlessonNumber(lessonRef.current.value);

}
    
 return(
      <div className={styles.wow}>
         <div className="container">
            {props.lessonNumber} {props.progression}
            <div className="d-flex justify-content-center mx-auto">
               <span className="input-group-text border border-warning">lesson number</span>
               <input ref={lessonRef} type="number" class="form-control border border-info"/>
            </div>
            <div className="d-flex justify-content-center mx-auto mt-4">
               <span className="input-group-text border border-info">pogresion</span>
               <input ref={progressRef} type="number" class="form-control border border-warning"/>
            </div>
             <button onClick={setNow} className="mt-5" style={{  background:' linear-gradient( rgba(0,0,255 ,0.7),  rgba(250,250,11,1)',  textDecoration: 'none'}}>send</button>
        </div>
      </div>  
 )
      
}