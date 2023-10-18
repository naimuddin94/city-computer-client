import PropTypes from "prop-types";

const Checkbox = ({ name, children, require = false }) => {
  return (
    <div className="flex items-center">
      <div className="flex mt-1">
        <input type="checkbox" name={name} required={require} />
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
  require: PropTypes.bool,
};

export default Checkbox;
