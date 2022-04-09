import './App.css';
import { useCallback, useState } from 'react';
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
    setShow(e)
  }
  const getVisibleSection= useCallback((section)=>{
	const settingVisible = () =>{setVisibleSection(section)};
	setTimeout(settingVisible,100)
  },[])
  return (
    <div className="App">
      <Navbar getSelectedTab={getSelectedTab} intersection = {visibleSection}/>
      <Home getSelectedTab={getSelectedTab} show={show} options = {options}  getVisibleSection = { getVisibleSection}/>
      <Biography getSelectedTab={getSelectedTab} show = {show} options = {options}  getVisibleSection = { getVisibleSection}/>
      <Services getSelectedTab={getSelectedTab} show = {show} options = {options} getVisibleSection = { getVisibleSection}/>
      <Projects getSelectedTab={getSelectedTab} show = {show} options = {options} getVisibleSection = { getVisibleSection}/>
      {/* <CoreValues /> */}
      <ContactMe getSelectedTab={getSelectedTab} show = {show} options = {options} getVisibleSection = { getVisibleSection}/>
      <div className="radial1"></div>
      <div className="radial2"></div>
    </div>
  );
}

export default App;
