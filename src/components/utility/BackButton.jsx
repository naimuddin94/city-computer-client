import { BsArrowLeft } from "react-icons/bs";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BackButton = ({ to = -1 }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(to)} className="btn normal-case my-2">
      <BsArrowLeft />
      Go Back
    </button>
  );
};

BackButton.propTypes = {
  to: PropTypes.any,
};

export default BackButton;
