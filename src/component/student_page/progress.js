import styles from './mystyle.module.css'; 



export default function Progress(){

    
   const circular_progress={
    position:'relative',
    height:'250px',
    width:'250px',
    background:' linear-gradient(to right, blue 0%, yellow 100%)',
    borderRadius:'50%',
   }
   const value_container={
     content:'',
     position:'absolute',
     height:'90%',
    width:'90%',
    backgroundColor:'#ffffff',
    borderRadius:'50%',
    display:'grid',
    placeItems:'center',
    left:'12px' ,
    top:'12px',
   }
 


    return(  
    <div className={styles.wow}>
        <h6>you completed</h6>
            <div style={circular_progress}>
                <div style={value_container}>
                    <h2 >10%</h2>
                </div>
            </div>
            <h6>from the course</h6>
    </div>

    )
}