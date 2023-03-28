import {useState } from 'react';
import Header from './Components/Layout/Header';
import Cart from './Components/Cart/Cart';
import Meals from './Components/Meals/Meals';
import CartProvider from './Store/CartProvider';
function App() {
  
  const [cartIsShown,setCartIsShown]=useState(false);
    
  function showCartHandler(){
  setCartIsShown(true);
  };

  function hideCartHandler(){
    setCartIsShown(false)
  };

    return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
      <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;