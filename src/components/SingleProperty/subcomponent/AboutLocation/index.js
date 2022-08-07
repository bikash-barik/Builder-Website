import "./index.css"
const AboutLocation = ({headingName,surroundingData}) => {
    return ( <div className="single-property-surrounding">
        <div className="single-property-surrounding-heading">
        <div>
        {headingName}
        </div>
        <div className="surrounding-line" />
        </div>
        <img className="surrounding-image" src={surroundingData} alt="Loading..." />
    </div>  );
}
 
export default AboutLocation;