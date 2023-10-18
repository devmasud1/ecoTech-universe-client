import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/myCart">My Cart</NavLink>
      </li>
    </>
  );

  return (
    <div className=" bg-slate-200">
      <div className="max-w-[1440px] mx-5 lg:mx-auto navbar ">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={`https://i.ibb.co/tHJjmd5/logo-2.pngg`}
              alt=""
              className="w-32 py-1"
            />
            <p className="text-xl lg:text-2xl font-semibold">
              <span className="text-rose-500 font-bold">E</span>co
              <span className="text-rose-600 font-bold">T</span>ech
              <span className="text-rose-700 font-bold">U</span>niverse
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end flex items-center gap-5">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-8 rounded-full">
              <img src={`https://i.ibb.co/G0nHnhv/user.png`} />
            </div>
          </label>
          <div>
            <Link to="/logIn" className="px-6 py-1 bg-[#706F6F] text-white rounded">
              LogIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
