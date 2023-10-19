import { FcGoogle } from "react-icons/fc";
import PropTypes from "prop-types";
import useAuthInfo from "../../hooks/useAuthInfo";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInWithGoogle } = useAuthInfo();
  const googleLogin = () => {
    signInWithGoogle()
      .then(() => {
        navigate(location.state ? location.state : "/");
        Swal.fire({
          title: "Success!",
          text: "Login successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        Navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errMessage = errorCode.replace("auth/", "");
        console.log(errMessage);
      });
  };
  return (
    <button onClick={googleLogin} type="button" className="social-btn">
      <FcGoogle className="text-xl" />
      {children}
    </button>
  );
};

SocialLogin.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SocialLogin;
