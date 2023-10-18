import PropTypes from "prop-types";

const Input = ({ children, type = "text", name = "", placeholder = "" }) => {
  return (
    <div>
      <label className="block text-sm mb-2 dark:text-white">{children}</label>
      <div className="relative">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="py-3 px-4 border block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
          required
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
