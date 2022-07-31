import "./index.css";


const Filter = (props) => {
  const { title, options,state,setState } = props
  const handleChange = (e)=>{
    setState(e.target.value)
  }
  return (
    <div className="menu-1">
      <div className="banner-dropdown ">
        <div className="menu-title">{title}</div>
        <div
          className=" drop-down-button dropdown-toggle"
          data-bs-toggle="banner-dropdown"
          aria-expanded="false"
          data-bs-offset="-10,40"
        >
          {state}
        </div>

        <div  className="form dropdown-menu ">
          {options?.map((option, idx) => {
            return (
              <label className="form-radio" key={idx}>
                <input
                  type="radio"
                  value={option}
                  name={title}
                  onChange={handleChange}
                />
                <div className="banner-option">{option}</div>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Filter;
