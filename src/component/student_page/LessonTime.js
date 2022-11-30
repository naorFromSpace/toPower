import React, { useState ,useEffect} from 'react'


function LessonTime(props) {
 
    let [lessonTime,setLessonTime] = useState([]);
    
    useEffect(() => {
        setLessonTime(props.avilDate)

    },[props.avilDate])
    
    return (
    <div>
      
    </div>
  )
}

export default LessonTime