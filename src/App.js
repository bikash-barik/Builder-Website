import { useEffect } from "react";
import "./App.css";
import Event from "./pages/Event/Event";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Communities from "./pages/Communities/Communities.js";
import Team from "./components/Team/Team";
import Ongoing from "./components/Communities/Ongoing/Ongoing";
import AOS from "aos";
import SingleProperty from "./components/SingleProperty/SingleProperty";
import Gallery from "./components/SingleProperty/Slider2";
import OngoingData from "./components/data/ongoing";
import Drawer from "./components/Navbar/Navbar";
import Offer from "./components/offers/Offers";
import Landing from "./pages/Landing";
import Footer from "./components/footer";
import { Navbar } from "react-bootstrap";
import Harmony from "./pages/Harmony";



function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Drawer />
     

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route
          exact path="/communities" element={
            <div>
              <Communities />
            </div>
          }
        />
         <Route exact path="Communities/4" element={<Harmony />} />
        <Route
          path="/event"
          element={
            <div>
              <Event />
            </div>
          }
        />
        <Route
          path="/team"
          element={
            <div>
              <Team />
            </div>
          }
        />
        <Route
          path="/latest-launch"
          element={
            <div>
              <Ongoing head="LATEST ONGOING PROJECTS" />
            </div>
          }
        />
        <Route
          path="/offers"
          element={
            <div>
              <Offer />
            </div>
          }
        />
        <Route
          path="/communities/:id"
          element={
            <div>
              <SingleProperty OngoingData={OngoingData} />
            </div>
          }
        />
        <Route
          exact
          path="/slider/:id"
          element={
            <div>
              <Gallery OngoingData={OngoingData} />
            </div>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
