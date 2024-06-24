import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="my-4">Shopping Cart</h1>
        <div className="cart-quantity">
          <Cart cart={cart} />
        </div>
      </div>
      <ProductList addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />
    </div>
  );
}

export default App;
