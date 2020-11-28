import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Dropdown = ({ title, options, onChange, defaultOptionIndex }) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (options.length > defaultOptionIndex) {
      setSelectedOption(options[defaultOptionIndex]);
    }
  }, [JSON.stringify(options), options, defaultOptionIndex]);

  const onSelectedOption = (option) => {
    onChange(option);
    setSelectedOption(option);
    setOpen(false);
  };

  const width =
    options.reduce(
      (max, curr) => Math.max(max, curr.title.length),
      Number.MIN_SAFE_INTEGER
    ) *
      9 +
    30;

  return (
    <div
      className={`dropdown${open ? " open" : ""}`}
      style={{ width: `${width}px` }}
      tabIndex="0"
      onBlur={() => setOpen(false)}
    >
      <div className="dropdown-header" onClick={() => setOpen(!open)}>
        <div className="dropdown-trigger">
          {selectedOption ? selectedOption.title : title}
        </div>
        <div className="dropdown-arrow"></div>
      </div>
      {open && (
        <ul>
          {options.map((option) => (
            <li
              key={option.id}
              value={option.id}
              onClick={() => onSelectedOption(option)}
            >
              {option.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
};

Dropdown.defaultProps = {
  title: "Options",
  options: [],
  onChange: null,
  defaultOptionIndex: null,
};

export default Dropdown;
