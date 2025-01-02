
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Components/About/About'; 
import Menu from './Components/Menu/Menu';
import Home from './Components/home/Home';
function App() {
  return(
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </div>
    </Router>

  );
}
export default App;
