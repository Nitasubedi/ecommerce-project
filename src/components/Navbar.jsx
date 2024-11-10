import { NavLink } from "react-router-dom";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="bg-orange-600 px-4 py-2 fixed w-full z-10 shadow-md">
      <div className="flex items-center space-x-6 text-white text-xs font-normal ml-96 pl-80">
        <NavLink to="/" className="hover:text-red-200">
          SAVE MORE ON APP
        </NavLink>
        <NavLink to="/seller" className="hover:text-red-200">
          BECOME A SELLER
        </NavLink>
        <NavLink to="/help" className="hover:text-red-200">
          HELP & SUPPORT
        </NavLink>
        <NavLink to="/login" className="hover:text-red-200">
          LOGIN
        </NavLink>
        <NavLink to="/signup" className="hover:text-red-200">
          SIGNUP
        </NavLink>
        <NavLink to="/language" className="hover:text-red-200">
          भाषा परिवर्तन
        </NavLink>
      </div>
      <div className="flex items-center justify-between h-16 mx-auto max-w-screen-xl">
        <div className="flex items-center">
          <img src="daraz.png" alt="Daraz Logo" className="h-10 ml-20" />
        </div>

        <div className="hidden md:flex items-center w-[600px] mr-96 ">
          <input
            type="text"
            placeholder="Search in Daraz"
            className="w-full p-2 pl-4  border-none outline-none"
          />
          <button className="bg-orange-100 text-orange-800 p-2  h-10">
            <CiSearch size={20} />
          </button>
          <button className="pl-6 text-white ">
            <PiShoppingCartSimpleLight size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
