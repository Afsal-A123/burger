import React from 'react';
import './Menu.css';
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Menu({ products }) {
    const formatCurrency = (value) => `$${parseFloat(value).toFixed(2)}`;

    
    console.log(products);

  
    return (
        <div className="menu-container">
            {Array.isArray(products) && products.length === 0 ? (
                <div>Loading products...</div>
            ) : (
                Array.isArray(products) && products.map((product) => (
                    <div className="ProductThumb" key={product.id}>
                        <div className="imgWrapper">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="main-img"
                                title={product.name}
                            />
                        </div>
                        <br />
                        <div className="information">
                            <h6 className="title">{product.name}</h6>
                            <span className="rating">
                                <Rating name="Read-only" value={product.rating || 3} readOnly />
                            </span>
                            <span className="brand1 d-block">By SpaceShip Store</span>
                            <br />
                            <div className="d-flex align-items-center box">
                                <div className="d-flex align-items-vertical txt">
                                    <span className="price1">{formatCurrency(product.newPrice)}</span>
                                    {product.oldPrice && (
                                        <span className="oldprice1">{formatCurrency(product.oldPrice)}</span>
                                    )}
                                </div>
                                <button className="button1" aria-label={`Add ${product.name} to cart`}>
                                    <ShoppingCartOutlinedIcon /> Add
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}
