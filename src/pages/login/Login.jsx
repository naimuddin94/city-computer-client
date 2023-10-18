import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Input from "../../components/utility/Input";
import Checkbox from "../../components/utility/Checkbox";

const Login = () => {
  return (
    <div className="dark:bg-slate-900 bg-gray-100 flex h-full items-center py-16">
      <div className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Login
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Don&rsquo;t have an account yet?
                <Link
                  to="/register"
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                >
                  Register here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <button type="button" className="social-btn">
                <FcGoogle className="text-xl" />
                Login with Google
              </button>

              <div className="social-or">
                Or
              </div>

              {/* <!-- Form start --> */}
              <form>
                <div className="grid gap-y-4">
                  <Input name="email" type="email">
                    Email Address
                  </Input>
                  <Input name="password" type="password">
                    Password
                  </Input>
                  <Checkbox>Remember me</Checkbox>
                  <button type="submit" className="my-btn">
                    Login
                  </button>
                </div>
              </form>
              {/* <!-- Form end --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
