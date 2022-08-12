import "./index.css"
import Grid from '@mui/material/Grid';

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
     <Grid container spacing={2} sx={{marginTop:"10px"}} className="finance-images-container">
        {
            financeData?.map((el,idx)=>{
                return(

                    <Grid item xs={4} sm={4} md={4} lg={2} className="finance-name-container" key={idx}>
                    <img  className="finance-image" src={el.image} alt="Loading..." />
                    <div className="finance-name">{el.text}</div>
                    </Grid>
                    )
            })
        }
        </Grid>
        </div>
     );
}
 
export default Finance;