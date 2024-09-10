import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="hidden flex-none lg:block">
      <div className="flex items-center gap-10 font-bold ">
        {/* Navbar menu content here */}
        <div className="flex gap-5 text-primary">
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

export default NavLinks;
