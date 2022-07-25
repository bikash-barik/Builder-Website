
import './App.css';
import Event from './pages/Event/Event';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './pages/Home/Home.js';
import Team from './components/Team/Team';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Event/>
    </div>
    
// <BrowserRouter>
//         <Routes>

//          <Route exact path="/" element={<div><Home/></div>}/>
//          <Route path ="/event" element={<div><Event/></div>}/>
//          <Route path ="/team" element={<div><Team/></div>}/>
//         </Routes>
// </BrowserRouter>
  );
       

  
}

export default App;
