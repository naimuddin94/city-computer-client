import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="btn normal-case my-2">
      <BsArrowLeft />
      Go Back
    </button>
  );
};

export default BackButton;
