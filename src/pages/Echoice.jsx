import React, { useContext } from 'react';
import './Choice.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './Cartcontext'; 

const Echoice = () => {
  const navigate = useNavigate();
  const { setOrderType } = useContext(CartContext);

  const handleChoice = (type) => {
    setOrderType(type);  // 🔁 sets globally
    navigate('/menu'); 
  };

  return (
    <>
  <div className='header-logo-ch'><img src='McDp.jpg' alt='logo' /></div>
    <div className='text'>
      <h1>Where would you like to eat?</h1>
      <div className='ch'>
        <div
          className='ei'
          onClick={() => handleChoice('eat-in')}
          style={{ cursor: 'pointer' }}
        ></div>

        <div
          className='ta'
          onClick={() => handleChoice('take-away')}
          style={{ cursor: 'pointer' }}
        ></div>
      </div>
    </div>
    </>
  );
};

export default Echoice;
