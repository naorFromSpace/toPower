import logo from './main_page/img/logo.png'
import { Link } from 'react-router-dom';


  export default function Navbar(props){
    
    function navList() {
        const navList=props.nav_list;
        let listItems = navList.map((list) =>
          <li>  
             <Link to={list.link} className="text-decoration-none">{list.name} </Link>
             {console.log(list.link,list.name)}
          </li>
        );
        return (
          <ul className="navbar-nav mx-auto text-decoration-none">{listItems}</ul>
        );
      }
    
    
    return(
   <nav className="shadow-lg p-3 mb-5">
    <div className="py-3 text-center ">
      <img src={logo} alt="" class="invert rounded"/>
    </div>
    <div className="navbar-expand">
      <div className="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
           {navList(props)}
      </div>
    </div>
  </nav>

    )


  }