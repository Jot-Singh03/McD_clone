import React, { useState ,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';
import categories from './Categories'
import items from './Items'
import { CartContext } from './Cartcontext';

const MenuPage = () => {
  const [active, setActive] = useState('Home'); 
  const filtereditems = items[active] || [];
  const navigate = useNavigate();
  const { addToCart, cartItems } = useContext(CartContext);
  const total = cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

  return (
    <>
    <div className='menu'>
      {/* LEFT PANEL */}
      <div className="side">
      <img src='McDp.jpg' className='logo' alt="logo"/>
        {categories.map((cat) => (
          <div
            key={cat.key}
            className={`sidebar-item ${active === cat.key ? 'active' : ''}`}
            onClick={() => setActive(cat.key)}
          >
            <img src={cat.icon} alt={cat.name} />
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
      {/* RIGHT PANEL */}

<div className='rightp'>
  <h1 className="section-title">{active}</h1>
  <div className="product-grid">
    {filtereditems.length > 0 ? (
      filtereditems.map((item) => (
        <div key={item.id} className="product-card" onClick={() => addToCart(item)}>
          <img src={item.image} alt={item.name} />
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>
        </div>
      ))
    ) : (
      <p>No items in this category.</p>
    )}
  </div>
   <div style={{ height: '600px' }}></div>
</div>



      
    </div>


{/* BOTTOM PANEL */}


<div className='down'>
        <div className='mqr'>
          <img className="nqr" src="/qr.png" alt="QR" />
          <p>Have a Code?</p>
          <h3>Scan or tap here</h3>
          <i className="fa-solid fa-chevron-down " ></i>
        </div>
        
        <div className='option'>
          <div className="order-value">
          <img src="./bag.jpg" alt="bag"/> 
            <p style={{ fontWeight: 'bold', fontSize: '18px' }}>
              Total: Rs{total === 0 ? '0.00' : total.toFixed(2)}
            </p>
            <div className='vo' onClick={() => navigate("/cart")}>
            <p>View My Order</p>
          </div>
          </div>

          
          
          <div className='mbut'>
            <div className="SO" onClick={() => navigate("/")}>
            <p>Start Over</p>
            </div>
            <div className="Access2">
            <i className="fa-solid fa-wheelchair " ></i>
            <p>Accessibility</p>
            </div>
            
          </div>
          
          <div className="cal">
          <p>2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request.</p>
        </div>
        </div>

      </div>





</>    
);
};

export default MenuPage;

