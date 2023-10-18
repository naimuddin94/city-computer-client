import { FaPhone } from "react-icons/fa6";
import { MdEmail, MdSearch } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import {BsFillQuestionDiamondFill} from "react-icons/bs" 

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#434f78] text-white py-3 text-lg px-5">
      <div className="px-6">
        <div className="flex flex-col-reverse sm:flex-row gap-2  justify-between">
          <div className="hidden lg:flex gap-5 items-center">
            <div className="flex gap-1 items-center">
              <FaPhone className="text-yellow-400" />
              <span className="text-hover">Call : 01911211421</span>
            </div>
            <div className="flex gap-1 items-center">
              <MdEmail className="text-yellow-400" />
              <span className="text-hover">Email : citycom@gmail.com</span>
            </div>
          </div>
          <div className="relative h-10 flex justify-center rounded-lg group focus-within:ring-2 focus-within:ring-yellow-400">
            <input
              type="text"
              className="w-full py-1 pl-4 border rounded-l-lg focus:outline-none"
              placeholder="Search here..."
            />
            <button className="bg-yellow-400 rounded-r-md text-white py-1 px-4 hover:bg-gray-300 hover:text-gray-600 duration-200">
              <MdSearch className="text-xl" />
            </button>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Link className="flex gap-1 items-center">
              <BsFillQuestionDiamondFill className="text-yellow-400" />
              <span className="text-hover">Why Us</span>
            </Link>
            <Link className="flex gap-1 items-center">
              <BiSolidContact className="text-yellow-400" />
              <span className="text-hover">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
