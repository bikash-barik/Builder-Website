import "./index.css"
const Finance = ({financeData}) => {
    return ( 
        <div className="single-property-finance">
        <div className="single-property-finance-heading">
        <div>
        FINANCE FACILITY
        </div>
        <div className="single-property-finance-line" />
        </div>
        <div className="single-property-finance-text">
        We are approved by all leading banks like
        </div>
        <div className="finance-images-container">
        {
            financeData?.map((el,idx)=>{
                return(

                    <div className="finance-name-container" key={idx}>
                    <img  className="finance-image" src={el.image} alt="Loading..." />
                    <div className="finance-name">{el.text}</div>
                    </div>
                    )
            })
        }
        </div>
        </div>
     );
}
 
export default Finance;