import { NavLink } from "react-router-dom";

const NavLInksMobile = () => {
  return (
    <div className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <div className="flex flex-col items-center gap-5 font-bold">
        {/* Navbar menu content here */}
        <div className="flex flex-col gap-5 text-primary">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-textlight" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-textlight" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-textlight" : "")}
          >
            Contact
          </NavLink>
        </div>
        <div className="bg-accent  text-textcolor py-2 px-5 rounded-md">
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "text-textlight" : "")}
          >
            LogIn
          </NavLink>
          <NavLink
            to="/singup"
            className={({ isActive }) => (isActive ? "text-textlight" : "")}
          >
            SingUp
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavLInksMobile;
