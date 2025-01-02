import React from 'react';
import './Product.css'; // If it shares the same styles, otherwise use its own CSS
import Rating from '@mui/material/Rating';

function ProductCard({ data }) {
  return (
    <div className="pCard" style={{ backgroundColor: data.color }}>
      <img src={data.image} alt={data.name} className="productImage" />
      <h3 className="productName">{data.name}</h3>
      <h3>Price: {data.price}</h3>
      <button variant="contained">Add to Cart</button>
    </div>
  );
}
export default ProductCard;