import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const NavLinks = () => {
  const {user, logOut} = useAuth()
  const naviget = useNavigate()

  const logout = () => {
    const tostId = toast.loading("LogoOut...")
    logOut()
    toast.success("LogOut Success", {id:tostId})
    naviget('/')
  }
  return (
    <div className="flex flex-col lg:flex-row gap-5 text-primary items-center">
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

      <div className="bg-accent min-w-24  min-h-10 flex items-center justify-center text-textcolor  rounded-md">
        {user?.email? 
        (<button onClick={logout}>LogOut</button>)
        :
        ( <NavLink to="/login" > LogIn </NavLink>)
        }
       
      </div>
    </div>
  );
};

export default NavLinks;
