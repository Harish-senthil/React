import React from 'react';


const Cart = ({ cart }) => {
  return (
    <div className="cart-info">
      <span>Cart: {cart.length} item{cart.length !== 1 ? 's' : ''}</span>
    </div>
  );
};


export default Cart;
