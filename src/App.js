
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Banner from './Components/Banner/Banner';
import NavigationBar from './Components/header/NavigationBar';
import About from './Components/home/About';
import Popular from './Components/Popular/Popular';
import Section from './Components/Section/Section';
import Slider from './Components/slider/CSlider';
function App() {
  return(
    <div>
      
      <NavigationBar/>
      <Banner/>
      <Section/>
      <Popular/>
      <Slider/>
      
      
      
    </div>
  );
}
export default App;
