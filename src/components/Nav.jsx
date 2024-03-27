import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 lg:text-xl border-green-400 font-bold border rounded-md p-1 mx-4"
                    : "lg:text-xl mx-4"
                }
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 lg:text-xl border-green-400 font-bold border rounded-md p-1 mx-4"
                    : "lg:text-xl mx-4"
                }
                to="/listed-books"
              >
                Listed Books
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 lg:text-xl border-green-400 font-bold border rounded-md p-1 mx-4"
                    : "lg:text-xl mx-4"
                }
                to="/page-read"
              >
                Page to Read
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 lg:text-xl border-green-400 font-bold border rounded-md p-1 mx-4"
                    : "lg:text-xl mx-4"
                }
                to="/author"
              >
                Author
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 lg:text-xl border-green-400 font-bold border rounded-md p-1 mx-4"
                    : "lg:text-xl mx-4"
                }
                to="/about-us"
              >
                About Us
              </NavLink>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost font-bold text-3xl">
            Book Vibe
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 lg:text-xl border-green-400 font-bold border rounded-md p-1 mx-4"
                  : "lg:text-xl mx-4"
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 lg:text-xl border-green-400 font-bold border rounded-md p-1 mx-4"
                  : "lg:text-xl mx-4"
              }
              to="/listed-books"
            >
              Listed Books
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 lg:text-xl border-green-400 font-bold border rounded-md p-1 mx-4"
                  : "lg:text-xl mx-4"
              }
              to="/page-read"
            >
              Page to Read
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 lg:text-xl border-green-400 font-bold border rounded-md p-1 mx-4"
                  : "lg:text-xl mx-4"
              }
              to="/author"
            >
              Author
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-green-500 lg:text-xl border-green-400 font-bold border rounded-md p-1 mx-4"
                  : "lg:text-xl mx-4"
              }
              to="/about-us"
            >
              About Us
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex gap-4">
            <a
              href="#_"
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 font-bold"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Sign In</span>
            </a>
            <a
              href="#_"
              className="relative rounded px-5 py-2.5 overflow-hidden group bg-blue-500  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300 font-bold"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
