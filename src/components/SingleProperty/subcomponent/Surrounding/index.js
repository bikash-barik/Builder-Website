import "./index.css"
const Surrounding = ({surroundingData}) => {
    return ( <div className="single-property-surrounding">
        <div className="single-property-surrounding-heading">
        <div>
        major in and around
        </div>
        <div className="surrounding-line" />
        </div>
        <img className="surrounding-image" style={{height:"380px",width:"700px"}} src={surroundingData} alt="Loading..." />
    </div>  );
}
 
export default Surrounding;