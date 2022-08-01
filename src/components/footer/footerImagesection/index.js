import logo from "../images/logo.svg"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import "./index.css"
const FooterImageSection = () => {
    return ( 
        <div className="footer-image-section">
        <img src={logo} alt="Loading..." />
        <div className="footer-icons">
        <img src={instagram} alt="Loading..." />
        <img src={twitter} alt="Loading..." />
        <img src={facebook} alt="Loading..." />
        </div>
        </div>
     );
}
 
export default FooterImageSection;