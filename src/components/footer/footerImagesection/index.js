import logo from "../images/logo.svg"
import instagram from "../images/instagram.svg"
import facebook from "../images/facebook.svg"
import twitter from "../images/twitter.svg"
import "./index.css"
const FooterImageSection = () => {
    return ( 
        <div className="footer-image-section">
        <img className="footer-logo-image" src={logo} alt="Loading..." />
        <div className="footer-icons">
        <img className="footer-icon-image" src={instagram} alt="Loading..." />
        <img className="footer-icon-image" src={twitter} alt="Loading..." />
        <img className="footer-icon-image" src={facebook} alt="Loading..." />
        </div>
        </div>
     );
}
 
export default FooterImageSection;