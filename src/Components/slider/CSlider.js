import React, { useState } from "react";
import Slider from "react-slick";
import "./CSlider.css";

export default function CSlider() {
  const data = [
    {
      color: "#fff3ff",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/02/veg-burger-recipe-1.jpg",
      name: "Veg Burger",
    },
    {
      color: "#feefea",
      image: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers-1180x580.jpg",
      name: "Chicken Burger",
    },
    {
      color: "#fffceb",
      image: "https://grilledcheesesocial.com/wp-content/uploads/2024/05/smashburger-grilled-cheese-14.jpg",
      name: "Sandwich",
    },
    {
      color: "#f2fce4",
      image: "https://images.unsplash.com/photo-1690988109029-aa2377d08b12?q=60&w=3000",
      name: "Coke",
    },
    {
      color: "#fff3ff",
      image: "https://images.unsplash.com/photo-1690988109041-458628590a9e?q=60&w=3000",
      name: "Sprite",
    },
  ];

  const [itemBg] = useState(data);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="CatSliderSection">
      <div className="container-fluid">
        <h2 className="hd">Featured Categories</h2>
        <Slider {...settings} className="cat_slider_main" id="cat_slider_main">
          {itemBg.map((item, index) => (
            <div className="info" key={index} style={{ background: item.color }}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
