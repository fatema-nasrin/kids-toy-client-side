import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 text-white">
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
              <li>
                <a>My Toys</a>
              </li>
              <li>
                <a>Add A Toy</a>
              </li>
              <li>
                <Link to="/blog">
                Blogs
                </Link>
              </li>

              <input
                type="text"
                placeholder="Search"
                className="input input-bordered rounded h-10"
              />
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="/public/logo.png"
            alt="Website Logo"
            className="w-auto lg:h-24"
          />
          <span className="font-bold lg:text-3xl text-orange-500">
            𝕄𝕦𝕤𝕚𝕂𝕚𝕕𝕕𝕠𝕤
          </span>
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
            <li>
              <a>My Toys</a>
            </li>
            <li>
              <a>Add A Toy</a>
            </li>
            <li>
            <Link to="/blog">
               <a>Blogs</a> 
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
        <img
          src="profile.jpg"
          alt="User Profile Picture"
          className="w-10 h-10 rounded-full"
        />
        <span>{}</span>
      </div>
    </div>
  );
};

export default Navbar;
