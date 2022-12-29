import "./index.css"

const ConstructionUpdates = ({constructionData,constructionData1}) => {
    return ( 
        <div className="construction-update">
        <div >
        <div className="construction-update-heading">CONSTRUCTION UPDATE</div>
        <div className="construction-update-line"></div>
      </div>
      <div className="construction-update-images-container">
      {
        constructionData?.map((el,idx)=>{
          console.log("construction-update-image-background"+idx)
          return(

            <div className={"construction-update-image-background construction-update-image-background-"+(idx+1)} key={idx}>
            <img className="construction-update-image" src={el.image} alt="Loading..." />
            </div>
            )

        })
      }
      </div>
      <div className="construction-update-images-container">
      {
        constructionData1?.map((el,idx)=>{
          console.log("construction-update-image-background"+idx)
          return(

            <div className={"construction-update-image-background construction-update-image-background-"+(idx+1)} key={idx}>
            <img className="construction-update-image" src={el.image} alt="Loading..." />
            </div>
            )

        })
      }
      </div>
    </div> 
    );
}
 
export default ConstructionUpdates;