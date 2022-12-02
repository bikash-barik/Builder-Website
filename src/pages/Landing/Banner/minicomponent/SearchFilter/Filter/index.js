import "./index.css";
import Dropdown from 'react-bootstrap/Dropdown';

const Filter = (props) => {
  const { title, options, state, setState } = props

  const handleChange = (e) => {
    setState(e.target.value)

  }
  return (
    <div className="menu-1">
      <div className="menu-title">{title}</div>
      <Dropdown>
        <Dropdown.Toggle as="div" className=" drop-down-button "
          id="dropdown-basic" align="end">
          {state}
        </Dropdown.Toggle>

        <Dropdown.Menu className="form" >

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


        </Dropdown.Menu>
      </Dropdown>
    </div>


  );
};
export default Filter;
