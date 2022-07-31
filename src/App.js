import { useEffect } from 'react';
import './App.css';
import Event from './pages/Event/Event';
import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";
import Communities from './pages/Communities/Communities.js';
import Team from './components/Team/Team';
import Ongoing from './components/Communities/Ongoing/Ongoing';
import AOS from 'aos';
import SingleProperty from './components/SingleProperty/SingleProperty';
import Slider2 from './components/SingleProperty/Slider2';
import OngoingData from './components/data/ongoing';
import Drawer from './components/Navbar/Navbar'
import Landing from "./pages/Landing"

import Footer from './components/footer';

function App() {

useEffect(() => {
  AOS.init()
}, [])



  return (
  
    
<BrowserRouter>

  <Drawer/>
 
        <Routes>
        <Route exact path="/" element={<Landing/>}/>
         <Route exact path="/communities" element={<div><Communities/></div>}/>
         <Route path ="/event" element={<div><Event/></div>}/>
         <Route path ="/team" element={<div><Team/></div>}/>
         <Route path ="/latest-launch" element={<div><Ongoing/></div>}/>
         <Route path ="/communities/:id" element={<div><SingleProperty OngoingData={OngoingData}/></div>}/>
         <Route exact path="/slider" element={<div><Slider2/></div>}/>
         </Routes>
    <Footer/>
</BrowserRouter>
  );
       

  
}

export default App;
