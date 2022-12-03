import Banner from "./Banner";
import AboutUs from "./AboutUs";
import LatestLaunches from "./latestLaunches";
import "./index.css"
import Main from '../../components/Main/Main';
import SearchFilter from "./Banner/minicomponent/SearchFilter/index";



const LandingScreen = () => {
    return ( 
        <div className="landing-screen" >
        
        <Banner/>
        <SearchFilter/>
        <AboutUs/>
        <LatestLaunches/>
        <Main/>
        </div> );
        
    }
 
export default LandingScreen;