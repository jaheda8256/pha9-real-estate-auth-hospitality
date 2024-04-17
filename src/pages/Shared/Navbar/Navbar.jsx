import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { renderToString } from "react-dom/server";
const Navbar = () => {
  const { logout, user } = useAuth();

  const tooltipContent = <>{user?.displayName || "user name not found"}</>;
  const tooltipString = renderToString(tooltipContent);

  const navLinks = (
    <>
      <li>
        <NavLink to="/"><span className="font-bold">Home</span></NavLink>
      </li>
      <li>
        <NavLink to="/updateProfile"><span className="font-bold">Update Profile</span></NavLink>
      </li>
      {/* <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li> */}
      <li>
        <NavLink to="/userProfile"> <span className="font-bold"> User profile</span></NavLink>
      </li>
      <li>
        <NavLink to="/about"> <span className="font-bold"> About</span></NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 m1-10 mt-6">
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
            {navLinks}
          </ul>
        </div>
        <h2 className="text-4xl text-purple-600 font-extrabold">FIVE</h2>
      </div>
      <div className="navbar-center mr-72 hidden lg:flex">
        <ul className="menu menu-horizontal ml-72 px-1">{navLinks}</ul>
      </div>

{user && (
          <div className="navbar-end gap-4">
            <div className="dropdown dropdown-end ">
              <label
                tabIndex={0}
                className="tooltip tooltip-bottom mr-4  btn btn-ghost  btn-circle avatar"
                data-tip={tooltipString}
              
              >
                <div className="w-12 rounded-full ">
                  <img
                    src={
                      user?.photoURL ||
                      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </label>

            </div>
          </div>
        )}

        <div className="gap-4">
          <Link to="/login">
            {user ? (
              <button
                onClick={logout}
                className="btn bg-gradient-to-r from-purple-700 to-teal-600 text-white"
              >
                LogOut
              </button>
            ) : (
              <button
                onClick={logout}
                className="btn bg-gradient-to-r from-purple-700  to-teal-600 text-white"
              >
                Login
              </button>
            )}
          </Link>
        </div>
      </div>
  );
};

export default Navbar;
