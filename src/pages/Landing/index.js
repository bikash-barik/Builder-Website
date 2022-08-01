import Banner from "./Banner";
import AboutUs from "./AboutUs";
import LatestLaunches from "./latestLaunches";
import "./index.css"
import Main from '../../components/Main/Main';



const LandingScreen = () => {
    return ( 
        <div className="landing-screen" >
        <Banner/>
        <AboutUs/>
        <LatestLaunches/>
        
        <Main/>
        </div> );
        
}
 
export default LandingScreen;