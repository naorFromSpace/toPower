import styles from './mystyle.module.css'; 


export default function AllProgress(){

   
    
    
    const indicator={
        height:'160px',
        width  :'40px',
        borderRadius:'8px',
        backgroundColor:'rgba(0,0,255,1)',
        marginLeft: '34px',
      
    }

  let h = "h-25" 
  let h1 = "h-50" 
  let h2 = "h-75" 
  let h3 = "h-50" 
  let h4 = "h-25" 
    return(
        <div>
            
         <div className={styles.containerMini}>
            <div  style={indicator}  className={h}></div>
            <div  style={indicator}  className={h1}></div>
            <div  style={indicator}  className={h2}> </div>
            <div  style={indicator}  className={h3}></div> 
            <div  style={indicator}  className={h4}></div>
    
         </div>
         <div className={styles.containerMini}></div>
        </div>
    )
}


