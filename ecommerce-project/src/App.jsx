import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import './App.css';
import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  }

  useEffect(() => {
    loadCart();
  }, []);
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path='checkout' element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
        <Route path='orders' element={<OrdersPage cart={cart} loadCart={loadCart} />} />
        <Route path='tracking' element={<TrackingPage cart={cart} />} />
      </Routes>
    </>
  )
}

export default App
