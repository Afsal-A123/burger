
import './App.css';
import Banner from './Components/Banner/Banner';
import NavigationBar from './Components/header/NavigationBar';
import Popular from './Components/Popular/Popular';
import Section from './Components/Section/Section';
function App() {
  return(
    <div>
      <NavigationBar/>
      <Banner/>
      <Section/>
      <Popular/>
    </div>
  );
}
export default App;
