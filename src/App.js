 
import { useState } from 'react';
import './App.css';
import AppRoutes from './appRoutes';
import { Appcontext } from './component/users';

function App() {
  
let [users,setusers] = useState([])
const showConsole = () => {
      if(users[users.length-1]==='student'){
        
      }
  alert("all work fine")
}


  
  return (
    <Appcontext.Provider value = {
      {
            users,
            setusers,
           showConsole    
      }
    }>
      <div className="App">
        <AppRoutes />
      </div>
    </Appcontext.Provider>
  );
}

export default App;
