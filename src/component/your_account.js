import Footer from "./footer";
import Navbar from "./navber";
import logo from './main_page/img/logo.png'
import StudentDetailObject from './student_page/stodent_details_object'
import { useEffect ,useState} from "react";
import axios from "axios";

export default function YourAccunt() {

let [name,setname] = useState();
let [email,setemail] = useState();
let [youare,setyouare] = useState();
// let name;
// let email;
// let youare;

  const container = {
    maxWidth: '700px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '20px 20px 40px rgba(60,60,150,0.25) ',
    display: 'flex',
    placeItems: 'center',
    marginBottom: '80px',
    marginTop: '80px',
    backgroundColor: '#f2fcff',

  }

  const nav_list = [
    {
      name: 'main mapg',
      link: '/'
    },
    // {
    //   name: 'products',
    //   link: '#'
    // },
    // {
    //   name: 'log in',
    //   link: '/Login'
    // },
  ]
  console.log(youare);

  useEffect(() => {

   doApi();
  })

  const doApi = async () => {

    let url = "http://localhost:3001/user/userinfo";
    try {
      let resp = await axios({
        url,
        method: "GET",
        headers: {
          "x-api-key": localStorage["user"],
          'content-type': "application/json"
        }
      })
    
      setname(resp.data.name);
      setemail(resp.data.email);
      setyouare(resp.data.usertype);
    //  name = resp.data.name;
    // email = resp.data.email;
    // youare = resp.data.userType;
    }

    

    catch (err) {
      console.log(err)
      alert("token Expired")
    }


  }

  return (

    <div >
      <Navbar nav_list={nav_list} />
      <div className="container p-5  " style={container}>

        <div >
          <div className="card-body ">
            <h6>hi {youare} : {name}</h6>
            <h6 >your email : {email}</h6>
          </div>
        </div>
      </div>



      <Footer />
    </div>
  )


}





// <h6>hi {StudentDetailObject.userType} : {StudentDetailObject.name}</h6>
// <h6 >your email : {StudentDetailObject.email}</h6>