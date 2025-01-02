import React from 'react';
import './Product.css';
import ProductCard from './ProductCard';




export default function Product() {
  const data = [
    {
      color: '#fff3ff',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/veg-burger-recipe-1.jpg',
      name: 'Veg Burger',
      price: '$100.00',
    },
    {
      color: '#feefea',
      image: 'https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers-1180x580.jpg',
      name: 'Chicken Burger',
      price: '$200.00',
    },
    {
      color: '#fffceb',
      image: 'https://grilledcheesesocial.com/wp-content/uploads/2024/05/smashburger-grilled-cheese-14.jpg',
      name: 'Sandwich',
      price: '$200.00',
    },
    {
      color: '#f2fce4',
      image: 'https://images.unsplash.com/photo-1690988109029-aa2377d08b12?q=60&w=3000',
      name: 'Coke',
      price: '$40.00',
    },
    {
      color: '#fff3ff',
      image: 'https://images.unsplash.com/photo-1690988109041-458628590a9e?q=60&w=3000',
      name: 'Sprite',
      price: '$40.00',
    },
    {
      color: '#fffceb',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXpnuGS1FwSwNZ9wea-xX_Y_yZiAyR11jPA&s',
      name: 'French Fries',
      price: '$100.00',
    },
  ];

  return (
    <div className="homeProducts">
      <center>
        <h1 className="title">The Burger King</h1>
      </center>
      <div className="productRow">
        {data.map((item, index) => (
          <ProductCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
