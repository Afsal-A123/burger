import {React} from 'react';
import Banner from './../Banner/Banner';
import Section from './../Section/Section';
import CSlider from '../slider/CSlider';
import Info from '../Info/Info';
import Product from '../Products/Product';
import Description from '../Desc/Description';
export default function Home()
{
    return(
         <div>
               <Banner/>  
               <Section/>
               <CSlider/>
               <Product/>
               <Info/>
               <Description/>
         </div>
    );
}