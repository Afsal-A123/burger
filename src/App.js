import React from 'react';
import './App.css';
import NavigationBar from './Components/header/NavigationBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Home from './Components/home/Home';
import data from './Burger.json'; 


function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
        
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu products={data.products} />} /> {/* Pass the products array to Menu */}
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
