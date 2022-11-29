import styles from './mystyle.module.css'; 


export default function Determination() {


    

    return(
        <div className={styles.wow} >
                    <div className='container '>
                    <h6 className='ms-3'>Choose a date and time for the lesson</h6>
                        <input type="date" className="form-control border border-warning mt-4"></input>
                        <br></br>
                        <input className="mt-3 form-control border border-info" type="time"></input>
                         <a className="  mt-5" style={{  background:' linear-gradient( rgba(0,0,255 ,0.7),  rgba(250,250,11,1)',  textDecoration: 'none'}}>send</a>
                    </div>
        </div>
    )
}
