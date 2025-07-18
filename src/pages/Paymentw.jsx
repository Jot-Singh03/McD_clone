import React from 'react';
import "./pay.css"
import { useNavigate } from 'react-router-dom';

const Paymentw = () => {
    const navigate = useNavigate();
  
  return (
      <div className='wrap-pm'>
      <div className='header-logo'><img src='McDp.jpg' alt='logo'/></div>
      <div className='textp'>
        <h1>Where Would you like to pay?</h1>
      </div>
      <div className='pm' onClick={() => navigate("/service")} >
        <p>Pay Here</p>
      </div>
      <p>or</p>
      <div className='pm2' onClick={() => navigate("/service")}>
        <p>Pay at the Counter</p>
      </div>
      <div className='bk' onClick={() => navigate("/cart")}>
        <p>Back</p>
      </div>
      </div>
  )
}

export default Paymentw
