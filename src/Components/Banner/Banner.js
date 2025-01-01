import {React} from 'react';
import banner5 from '../../asserts/banner5.png';
import './Banner.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../asserts/image1.png'
import image3 from '../../asserts/image3.png';
import image2 from '../../asserts/image2.png';
export default function Banner()
{
    const settings = {
        dots: false,
        infinite: true, 
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        arrows: false,
        autoplay: true, 
        autoplaySpeed: 2000, 
      };
    
      return (
        <div className="Banner-Section">
          <Slider {...settings}>
            <center>
            <div>
              <img className="img" src={image2}  alt="Banner 1"  />
            </div>
            </center>
            <center>
            <div>
              <img className="img" src={banner5} alt="Banner 2" />
            </div>
            </center>
            <center>
            <div>
              <img className="img" src={image3}  alt="Banner 3" />
            </div>
            </center>
            <center>
            <div>
              <img className="img" src={image1}  alt="Banner 3" />
            </div>
            </center>
          </Slider>
        </div>

    );
}