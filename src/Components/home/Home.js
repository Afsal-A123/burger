import {React} from 'react';
import NavigationBar from '../header/NavigationBar';
import Banner from '../Banner/Banner';
import Section from '../Section/Section';
import CSlider from '../slider/CSlider';
export default function Home()
{
    return(
         <div>
             <NavigationBar/>
               <Banner/>  
               <Section/>
               <CSlider/>
         </div>
    );
}