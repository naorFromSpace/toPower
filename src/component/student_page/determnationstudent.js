import styles from './mystyle.module.css';
import { useRef, useEffect, useState } from 'react';
import axios from 'axios';

const from = "16:00";
const to = "20:00"
export default function Determinationstudent(props) {


    let time = "";
    let prvtime = [];
    let dateRef = useRef();
    let timeRef = useRef();

    const setLesson = () => {
        if (timeRef.current.value < from || timeRef.current.value > to) {
           alert("from 16:00 to 20:00")
            return;
        }
        if (dateRef.current.value < "2021"|| dateRef.current.value > "2030") {
            alert("not right date")
             return;
         }

        time = dateRef.current.value + " " + timeRef.current.value;
        prvtime.push(time);
        props.sendLesson({
            next_Lesson: prvtime
        })
        console.log(prvtime)
    }

    useEffect(() => {

        doApi();

    })


    const doApi = async () => {

        let url = "http://localhost:3001/user/" + props.email;
        try {
            let resp = await axios({
                url,
                method: "GET",

            })
            prvtime = resp.data[0].next_Lesson;
          console.log(prvtime)

        }

        catch (err) {
            console.log(err)
            // alert("failed to get")
        }

    }

    return (
        <div className={styles.wow} >
            <div className='container '>
                <h6 className='ms-3'>Choose a date and time for the lesson</h6>
                <input ref={dateRef} type="date" className="form-control border border-warning mt-4"></input>
                <br></br>
                <input ref={timeRef} className="mt-3 form-control border border-info" type="time"></input>
                <button onClick={setLesson} className="  mt-5" style={{ background: ' linear-gradient( rgba(0,0,255 ,0.7),  rgba(250,250,11,1)', textDecoration: 'none' }}>send</button>
            </div>
        </div>
    )
}
