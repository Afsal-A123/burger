import {React} from 'react';
import Banner from './../Banner/Banner';
import Section from './../Section/Section';
import CSlider from '../slider/CSlider';
export default function Home()
{
    return(
         <div>
               <Banner/>  
               <Section/>
               <CSlider/>
         </div>
    );
}