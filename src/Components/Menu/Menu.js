import burger from '../../asserts/burger.png';
import burger1 from '../../asserts/burger1.png';
import './Menu.css';
export default function Menu() {
    return (
        <div className="menu-container">
            <div className="menu-item">
                <div className="menu-6-item bg-white">
                    <div className="menu-6-img rel">
                        <div className="hover-overlay">
                            <img className="img-fluid" src={burger} alt="menu-image" />
                            <span className="item-code bg-tra-dark">Code: 0850</span>
                            <div className="menu-img-zoom ico-25">
                                <a className="image-link">
                                    <span className="flaticon-zoom"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="menu-6-txt rel">
                        
                        <div className="like-ico ico-25">
                            <a href="/demo-2#">
                                <span className="flaticon-heart"></span>
                            </a>
                        </div>
                        <h5 className="h5-sm coffee-color">Crispy Chicken</h5>
                        <p className="grey-color">Chicken breast, chilli sauce, tomatoes, pickles, coleslaw</p>
                        <div className="menu-6-price bg-coffee">
                            <h5 className="h5-xs yellow-color">$8.50</h5>
                        </div>
                        <div className="add-to-cart bg- ico-5">
                            <a href="/product-single">
                                <span className="flaticon-shopping-bag"></span> Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menu-item">
                <div className="menu-6-item bg-white">
                    <div className="menu-6-img rel">
                        <div className="hover-overlay">
                            <img className="img-fluid" src={burger1} alt="menu-image" />
                            <span className="item-code bg-tra-dark">Code: 0851</span>
                            <div className="menu-img-zoom ico-25">
                                <a className="image-link">
                                    <span className="flaticon-zoom"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="menu-6-txt rel">
                        <h5 className="h5-sm coffee-color">Spicy Chicken</h5>
                        <p className="grey-color">Spicy grilled chicken, lettuce, tomato, mayo, pickles</p>
                        <div className="menu-6-price bg-coffee">
                            <h5 className="h5-xs yellow-color">$9.00</h5>
                        </div>
                        <div className="add-to-cart bg-yellow ico-10">
                            <a href="/product-single">
                                <span className="flaticon-shopping-bag"></span> Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
