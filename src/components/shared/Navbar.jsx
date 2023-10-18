import { Link } from "react-router-dom";
import NavLi from "../utility/NavLi";


const Navbar = () => {
  return (
    <div className="navbar justify-between z-50 max-w-[1440px] mx-auto text-gray-100 bg-[#3a4468] px-4 md:px-8 sticky top-0">
      <div className="">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-[#434f78]"
          >
            <NavLi />
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl md:text-2xl font-satisfy font-bold"
        >
          City Computers
        </Link>
      </div>
      <div className="navbar-center flex gap-10">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-2 px-1">
            <NavLi />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
