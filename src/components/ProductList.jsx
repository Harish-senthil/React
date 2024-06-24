import React from 'react';
import Product from './Product';
import "./styles.css"

const products = [
  { id: 1, name: 'Juice'},
  { id: 2, name: 'Pizza'},
  { id: 3, name: 'Burger'},
  { id: 4, name: 'Fries'},
  { id: 5, name: 'Beverages'},
  { id: 6, name: 'Ice creams'},
];

const ProductList = ({ addToCart, removeFromCart, cart }) => {
  return (
    <div className="row">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          inCart={cart.some(item => item.id === product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
