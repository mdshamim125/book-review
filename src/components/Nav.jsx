import { NavLink } from "react-router-dom";

const Nav = () => {

  return (
    <div className="flex justify-between items-center">
      <div className="">
        <NavLink
          to="/"
          className="btn btn-ghost gap-0 font-bold  text-3xl"
        >
          Book Vibe
        </NavLink>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu hidden sm:flex menu-horizontal  gap-6">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-500 text-xl border-green-400 font-bold border rounded-md p-1" : "text-xl"
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-500 text-xl border-green-400 font-bold border rounded-md p-1" : "text-xl"
            }
            to="/listed-books"
          >
            Listed Books
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-500 text-xl border-green-400 font-bold border rounded-md p-1" : "text-xl"
            }
            to="/page-read"
          >
            Page to Read
          </NavLink>
        </ul>
      </div>
      <div className="flex gap-4">
        <a
          href="#_"
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-green-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          data-rounded="rounded-md"
          data-primary="blue-600"
          data-primary-reset="{}"
        >
          Sign Up
        </a>
        <a
          href="#_"
          className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-400 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          data-rounded="rounded-md"
          data-primary="blue-600"
          data-primary-reset="{}"
        >
          Sign In
        </a>
      </div>
    </div>
  );
};

export default Nav;
