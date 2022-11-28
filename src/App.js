 
import { useState } from 'react';
import './App.css';
import AppRoutes from './appRoutes';
import { Appcontext } from './component/users';

function App() {
  
  
  return (
    <Appcontext.Provider value = {
      {
           
      }
    }>
      <div className="App">
        <AppRoutes />
      </div>
    </Appcontext.Provider>
  );
}

export default App;
