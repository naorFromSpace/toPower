
import logo from './main_page/img/logo.png'
import { useEffect } from 'react';



export default function Message(props) {
  


  return (
    <div className="container  row  " >
      {props.messege.map((item, i) => {
        if (item.email == "cymatlin@gmail.com")
          return (
            <div class="d-flex flex-row justify-content-start mb-4">
              <img src={logo}
                alt="avatar 1" style={{ width: '45px', height: '100%' }} />
              <div class="p-3 ms-2" style={{ borderRadius: ' 15p', backgroundColor: '#f2fcff' }}>

                <p class="small mb-0">{item.msg}</p>
              </div>
            </div>
          );
        else return (
          <div class="d-flex flex-row justify-content-end mb-4">
            <div class="p-3  " style={{ backgroundColor: '#fbfbfb' }}>
              <p class="small mb-0">{item.msg}</p>
            </div>
          </div>
        )
      }

      )}
    </div>
  )
}



