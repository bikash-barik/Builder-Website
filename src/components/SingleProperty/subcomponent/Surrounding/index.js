import "./index.css"
const Surrounding = ({surroundingData}) => {
    return ( <div className="single-property-surrounding">
        <div className="single-property-surrounding-heading">
        <div>
        major in and around
        </div>
        <div className="surrounding-line" />
        </div>
        <img className="surrounding-image" src={surroundingData} alt="Loading..." />
    </div>  );
}
 
export default Surrounding;