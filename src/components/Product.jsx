import React from 'react';
import { Card, Button } from 'react-bootstrap';


const Product = ({ product, addToCart, removeFromCart, inCart }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <Card>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          {inCart ? (
            <Button variant="danger" onClick={() => removeFromCart(product)}>Remove from Cart</Button>
          ) : (
            <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
