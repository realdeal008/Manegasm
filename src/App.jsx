import { useState } from 'react'

import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Services from './Component/Services'
import Portfolio from './Component/Portfolio'
import Products from './Component/Products'
import Booking from './Component/Booking'
import Testimonials from './Component/Testimonials'
import Footer from './Component/Footer'
import { useCart } from './context/useCart'
import CartModal from './Component/CartModal'


function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  
  return (
    <>
      <Navbar toggleCart={toggleCart} cartCount={cartCount}  />
      <Hero />   
      <Services/>   
      <Portfolio/>  
      <Products/>  
      <Booking/> 
      <Testimonials/>
      <Footer/> 
      <CartModal isOpen={isCartOpen} closeCart={closeCart} />  
    </>
  )
}

export default App
