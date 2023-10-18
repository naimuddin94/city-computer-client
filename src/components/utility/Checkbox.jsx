import PropTypes from "prop-types";

const Checkbox = ({ name, children }) => {
  return (
    <div className="flex items-center">
      <div className="flex mt-1">
        <input type="checkbox" name={name} />
      </div>
      <div className="ml-3">
        <label className="text-sm dark:text-white">{children}</label>
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  children: PropTypes.any,
};

export default Checkbox;
