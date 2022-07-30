import { useEffect } from 'react';
import './App.css';
import Event from './pages/Event/Event';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Communities from './pages/Communities/Communities.js';
import Team from './components/Team/Team';
import Ongoing from './components/Communities/Ongoing/Ongoing';
import AOS from 'aos';
import Drawer from './components/Navbar/Navbar';
// <<<<<<< HEAD
import Main from './components/Main/Main'
// ======
import SingleProperty from './components/SingleProperty/SingleProperty';
import OngoingData from './components/data/ongoing';
// >>>>>>> 180bd6a469c6c345835528e1cbce39eefecd3b06

function App() {

useEffect(() => {
  AOS.init()

 
}, [])



  return (
  
    
<BrowserRouter>

  <Drawer/>
  {/* <Main/> */}
        <Routes>
        <Route exact path="/" element={<div><Main/></div>}/>
         <Route exact path="/communities" element={<div><Communities/></div>}/>
         <Route path ="/event" element={<div><Event/></div>}/>
         <Route path ="/team" element={<div><Team/></div>}/>
         <Route path ="/latest-launch" element={<div><Ongoing/></div>}/>
         <Route path ="/communities/:id" element={<div><SingleProperty OngoingData={OngoingData}/></div>}/>
        </Routes>
</BrowserRouter>
  );
       

  
}

export default App;
