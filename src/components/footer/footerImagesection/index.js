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
        <a href="https://www.instagram.com/archidbuilders_homesforlife/?igshid=8vhwlhruxu5e" target="_blank" ><img className="footer-icon-image" src={instagram} alt="Loading..." /></a>
        <a href="https://twitter.com/ArchidLtd" target="_blank" ><img className="footer-icon-image" src={twitter} alt="Loading..." /></a>
        <a href="https://www.facebook.com/archidbuildershomesforlife/" target="_blank" ><img className="footer-icon-image" src={facebook} alt="Loading..." /></a>
        </div>
        </div>
     );
}
 
export default FooterImageSection;