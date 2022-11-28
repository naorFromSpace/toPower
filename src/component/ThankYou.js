import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';

function ThankYou() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/')
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div>
     thank you for your purchase
     we are sure you will be pleased
        
 </div>
  )
}

export default ThankYou