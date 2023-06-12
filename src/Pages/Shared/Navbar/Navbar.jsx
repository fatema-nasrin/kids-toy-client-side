import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="navbar text-white bg-gradient-to-r from-[#514f4f] to-[rgba(21, 21, 21, 0)]">
      <div className="navbar-start">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>
              <li>
                <Link to="/">
                <a>Home</a>
                </Link>
              </li>

              <li>
              <Link to="/allToys">
              <a>All Toys</a>
              </Link>
              </li>


              <input
                type="text"
                placeholder="Search"
                className="input input-bordered rounded h-10"
              />
              <li >
                <HiShoppingCart className="h-12 w-10 mx-4 text-orange-400"/>
              </li>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/logo.png"
            alt="Website Logo"
            className="w-auto lg:h-20 opacity-75"
          />
          
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ml-52">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <li>
            <Link to="/">
                <a>Home</a>
                </Link>
            </li>
            <li>
              <Link to="/allToys">
              <a>All Toys</a>
              </Link>
            </li>
            
            
           
          </li>
        </ul>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered rounded h-10"
        />
       
      </div>
      <div className="navbar-end">
               <div>
               <HiShoppingCart className="h-12 w-10 mx-4 text-orange-400"/>
               </div>
              
        <img
          src="profile.jpg"
          alt="User Profile Picture"
          className="w-10 h-10 rounded-full mx-4"
        />
    
      </div>
    </div>
  );
};

export default Navbar;
