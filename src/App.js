import logo from './logo.svg';
import './App.css';
import { useRef,useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Biography from './biography/Biography';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import CoreValues from './components/coreValues/CoreValues';
import ContactMe from './components/contact-me/ContactMe';


function App() {
  const [show, setShow] = useState("")
  const [visibleSection,setVisibleSection] = useState(null)
  const options = {
    root:null,
    rootMargin:"0px",
    threshold: 0.5
  }

  const getSelectedTab=(e)=>{
    // let toScroll=e.target.id
    setShow(e.target.id)
  }
  const getVisibleSection=(section)=>{
    console.log(section);
    setVisibleSection(section)

  }
  return (
    <div className="App">
      <Navbar getSelectedTab={getSelectedTab} intersection = {visibleSection}/>
      <Home show={show} options = {options}  getVisibleSection = { getVisibleSection}/>
      <Biography show = {show} options = {options}  getVisibleSection = { getVisibleSection}/>
      <Services show = {show} options = {options} getVisibleSection = { getVisibleSection}/>
      <Projects show = {show} options = {options} getVisibleSection = { getVisibleSection}/>
      <CoreValues />
      <ContactMe show = {show} options = {options} getVisibleSection = { getVisibleSection}/>
      <div className="radial1"></div>
      <div className="radial2"></div>
      
    </div>
  );
}

export default App;
