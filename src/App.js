import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/navbar/home/Home';
import Biography from './biography/Biography';
import Services from './components/navbar/services/Services';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Biography/>
      <Services/>
      <div className="radial1"></div>
      <div className="radial2"></div>
      
    </div>
  );
}

export default App;
