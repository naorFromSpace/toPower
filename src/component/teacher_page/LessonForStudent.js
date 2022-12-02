import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function LessonForStudent(props) {
  const navigate = useNavigate();
  let [lessonTime, setLessonTime] = useState([]);
  console.log(props.email);

  useEffect(() => {
    setLessonTime(props.avilDate)

  }, [props.avilDate])

  const arr = props.avilDate
  //  console.log(arr)

  const deleteNow = (date) => {
    let filterar = lessonTime.filter(item => item != date)
    console.log(filterar);
    doPostapi(filterar);
  }

  const doPostapi = async (filterar) => {


    let url = "http://localhost:3001/user/Edit/" + props.email;
    try {
      let resp = await axios({
        url,
        method: "PUT",
        data: {
          next_Lesson:filterar
        }

      })
      // navigate("/");
      window.location.reload(false)
      console.log(resp.data)

    }

    catch (err) {
      console.log(err)
      alert("failed to upload")
    }



  }
  const listItems = arr.map((date) =>
    <div className="shadow-lg p-3 mb-5 rounded text-center font-italic  mt-2" style={{ width: '200px', backgroundColor: '#ffffff', color: '#01ccff' }} >
      <div >date : {date}</div>
      <button onClick={() => {
        deleteNow(date)
      }} className="btn mt-3 mb-1" style={{ backgroundColor: '#92fcff' }}>Delete</button>
    </div>

  );


  return (

    <div>

      <div className="container mb-5 shadow-lg text-center rounded border " style={{}}>
        <h2 className="text-primary font-italic mt-2">next lesson</h2>
        <div className=" row d-flex justify-content-around ">{listItems}</div>
      </div>

    </div>

  );
}



