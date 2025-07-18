import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import CartPage from './pages/CartPage.jsx';
import Echoice from './pages/Echoice.jsx';
import Paymentw from './pages/Paymentw.jsx';
import Service from './pages/Service.jsx';
import OrderDn from './pages/OrderDn.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/choice" element={<Echoice />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/pay" element={<Paymentw/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/order" element={<OrderDn/>} />

    </Routes>
  );
}

export default App;
