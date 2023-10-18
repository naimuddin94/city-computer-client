import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/utility/Input";
import Checkbox from "../../components/utility/Checkbox";
import { useState } from "react";
import useAuthInfo from "../../hooks/useAuthInfo";
import ErrorAlert from "../../components/utility/ErrorAlert";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import SocialLogin from "../../components/utility/SocialLogin";

const Register = () => {
  const [error, setError] = useState(null);
  const { createUser, loading, setLoading } = useAuthInfo();
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photo = event.target.photo.value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const hasUppercase = /[A-Z]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!emailRegex.test(email)) {
      return setError("Email not valid");
    }

    if (password.length < 6) {
      return setError("Password less than 6 characters");
    }

    if (!hasUppercase) {
      return setError("Password don't have a capital letter");
    }

    if (!hasSpecialCharacter) {
      return setError("Password don't have a special character");
    }

    createUser(email, password)
      .then((result) => {
        event.target.reset();
        navigate("/");
        setError(null);
        Swal.fire({
          title: "Success!",
          text: "Account created successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => console.log("User name update successfully"))
          .catch((err) => console.log("During update profile", err.message));
      })
      .catch((err) => {
        setLoading(false);
        const errorCode = err.code;
        const errMessage = errorCode.replace("auth/", "");
        setError(errMessage);
      });
  };

  

  return (
    <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
      <div className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Register
              </h1>
              {error && <ErrorAlert>{error}</ErrorAlert>}
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account?
                <Link
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  to="/login"
                >
                  Login here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <SocialLogin>Register with Google</SocialLogin>

              <div className="social-or">Or</div>

              {/* <!-- Form --> */}
              <form onSubmit={handleRegister}>
                <div className="grid gap-y-4">
                  <Input name="name">Full Name</Input>
                  <Input name="email" type="email">
                    Email Address
                  </Input>
                  <Input name="photo">Photo URL</Input>
                  <Input name="password" type="password">
                    Password
                  </Input>

                  <Checkbox require={true}>
                    I accept the{" "}
                    <span className="text-blue-600 cursor-pointer hover:underline font-medium">
                      Terms and Conditions
                    </span>
                  </Checkbox>

                  <button type="submit" className="my-btn">
                    {loading ? (
                      <span className="loading loading-spinner text-warning"></span>
                    ) : (
                      "Register"
                    )}
                  </button>
                </div>
              </form>
              {/* <!-- End Form --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
