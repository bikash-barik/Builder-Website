import Banner from "./Banner";
import AboutUs from "./AboutUs";
import LatestLaunches from "./latestLaunches";
import "./index.css"
import Main from '../../components/Main/Main';
import ConstructionUpdates from "../../components/SingleProperty/subcomponent/ConstructionUpdates";


const LandingScreen = () => {
    return ( 
        <div className="landing-screen" >
        <Banner/>
        <AboutUs/>
        <LatestLaunches/>
        
        <Main/>
        </div> );
        // <ConstructionUpdates/>
}
 
export default LandingScreen;