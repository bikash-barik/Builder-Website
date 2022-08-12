import "./index.css";
const Description = (props) => {
  const { title, description } = props;
  return (
    <div className="single-property-description-container">
      <div className="single-property-description-heading">
        <div>{title}</div>
        <div className="single-property-description-line" />
      </div>
      <div
        className="single-property-description"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <span className="single-property-special-class">{description[0]}</span>
        <span >
        {description.slice(1)}
        </span> 
      </div>
    </div>
  );
};

export default Description;
