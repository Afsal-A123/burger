import './App.css';
import NavigationBar from './Components/header/NavigationBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './Components/About/About'; 
import Menu from './Components/Menu/Menu';
import Home from './Components/home/Home';
function App() {
  return(
    <div className='app'>
    <BrowserRouter>
    <NavigationBar/>
    <Home/>
    <Switch>
      <Route path="/Home" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/About" element={<About />} />
    </Switch>
  </BrowserRouter>

    </div>

  );
}
export default App;
