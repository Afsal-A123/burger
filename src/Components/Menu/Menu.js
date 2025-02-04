import React, { useState, useEffect } from 'react';
import './Menu.css';
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Menu() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formatCurrency = (value) => `$${parseFloat(value).toFixed(2)}`;

    // Fetch products from backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://your-backend-url/api/products'); // Replace with your backend endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Add product to cart
    const handleAddToCart = async (product) => {
        try {
            const response = await fetch('http://your-backend-url/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId: product.id }),
            });
            if (!response.ok) {
                throw new Error('Failed to add product to cart');
            }
            alert(`${product.name} has been added to the cart!`);
        } catch (err) {
            alert(`Error: ${err.message}`);
        }
    };

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="menu-container">
            {Array.isArray(products) && products.length > 0 ? (
                products.map((product) => (
                    <div className="ProductThumb" key={product.id}>
                        <div className="imgWrapper">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="main-img"
                                title={product.name}
                            />
                        </div>
                        <div className="information">
                            <h6 className="title">{product.name}</h6>
                            <span>{product.description}</span>
                            <span className="rating">
                                <Rating name="Read-only" value={product.rating || 3} readOnly />
                            </span>
                            <span className="brand1 d-block">{product.from}</span>
                            <br />
                            <br />
                            <div className="d-flex align-items-center box">
                                <div className="d-flex align-items-vertical txt">
                                    <span className="price1">{formatCurrency(product.newPrice)}</span>
                                    {product.oldPrice && (
                                        <span className="oldprice1">{formatCurrency(product.oldPrice)}</span>
                                    )}
                                </div>
                                <button
                                    className="button1"
                                    aria-label={`Add ${product.name} to cart`}
                                    onClick={() => handleAddToCart(product)}
                                >
                                    <ShoppingCartOutlinedIcon /> Add
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div>No products available</div>
            )}
        </div>
    );
}
