import React from 'react';
import './Foot.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import XIcon from '@mui/icons-material/X';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import {Link} from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import GooglePlayIcon from "../../asserts/googleplay.png"
import AppleStoreIcon from "../../asserts/applestore.png"
const Foot=()=>{
    return(
        <div className='footerWrapper'>
           
           <footer>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3 part1 footer'>
                        <h3 >Details</h3>
                        <p>BURGER KING</p>
                        <p><LocationOnOutlinedIcon/> <strong>Address:</strong> 45, Anna Nagar, South Ukkadam, Coimbatore, 641-001</p>
                        <p><CallIcon/> <strong>Call Us:</strong> 1900-888-000</p>
                        <p><EmailOutlinedIcon/> <strong>Email:</strong> burger-king@gmail.com</p>
                        <p><WatchLaterOutlinedIcon/> <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                    </div>
                    <div className='col-md-8 part2'>
                        <div className='row d-flex' >
                            <div className='col d-flex'>
                                <ul className='footer-list mb-sm-5 mb-md-0'>
                                    <h3>Company</h3>
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Delivery Information</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="#">Terms &amp; Conditions</Link></li>
                                    <li><Link to="#">Contact Us</Link></li>
                                    <li><Link to="#">Support Center</Link></li>
                                    <li><Link to="#">Careers</Link></li>
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='footer-list mb-sm-5 mb-md-0'>
                                    <h3>Account</h3>
                                    <li><Link to="#">Sign in</Link></li>
                                    <li><Link to="#">ViewCart</Link></li>
                                    <li><Link to="#">My Wishlist</Link></li>
                                    <li><Link to="#">Track MyOrder</Link></li>
                                    <li><Link to="#">Help Ticket</Link></li>
                                    <li><Link to="#">Shipping Details</Link></li>
                                    <li><Link to="#">Compare products</Link></li>
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='footer-list mb-sm-5 mb-md-0'>
                                    <h3>Cooperate</h3>
                                    <li><Link to="#">Sell on Snooplay</Link></li>
                                    <li><Link to="#">Affiliate Program</Link></li>
                                    <li><Link to="#">Bulk Purchase</Link></li>
                                    <li><Link to="#">Corporate Order</Link></li>
                                    <li><Link to="#">Our Suppliers</Link></li>
                                    <li><Link to="#">Accessibility</Link></li>
                                    <li><Link to="#">Compare products</Link></li>
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='footer-list mb-sm-5 mb-md-0'>
                                    <h3>Popular</h3>
                                    <li><Link to="#">Burgers</Link></li>
                                    <li><Link to="#">Sandwitch</Link></li>
                                    <li><Link to="#">Pizzas</Link></li>
                                    <li><Link to="#">Shakes &amp; Falooda</Link></li>
                                    <li><Link to="#">Shawarma</Link></li>
                                    <li><Link to="#">Wraps</Link></li>
                                    <li><Link to="#">Momos</Link></li>
                                </ul>
                            </div>
                            <div className='col'>
                                <ul className='footer-list mb-sm-5 mb-md-0'>
                                    <h3>Install Apps</h3>
                                    <li><Link to="#">Install Android App</Link></li>
                                    <li><img src={GooglePlayIcon} /></li>
                                    <li><Link to="#">Install IOS App</Link></li>
                                    <li><img src={AppleStoreIcon} /></li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='row lastStrip'>
                    <div className='col-md-3'>
                        &#169; 2025, Burger King-HTML Ecommerce Template All rights reserved
                    </div>
                    
                    <div className='col-md-3 part3'>
                        <div className='d-flex align-items-center box'>
                            <h5>Follow Us: </h5>
                            <ul className='list list-inline align-self-end'>
                                <li className='list-inline-item'>
                                <Link to="#"><FacebookRoundedIcon/></Link>
                                </li>
                                <li className='list-inline-item'>
                                <Link to="#"><WhatsAppIcon/></Link>
                                </li>
                                <li className='list-inline-item'>
                                <Link to="#"><InstagramIcon/></Link>
                                </li>
                                <li className='list-inline-item'>
                                <Link to="#"><YouTubeIcon/></Link>
                                </li>
                                <li className='list-inline-item'>
                                <Link to="#"><XIcon/></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
           </footer>
        </div>

    )
}
export default Foot;