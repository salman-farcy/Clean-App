import PropTypes from "prop-types";
// import { NavLink } from "react-router-dom";
import NavLinks from "../components/navlinks/NavLinks";
import NavLInksMobile from "../components/navlinks/NavLInksMobile";
import Container from "../components/ui/Container";

const MainLayouts = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}

        <div className="navbar w-full bg-background">
          <Container>
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className=" flex-1  text-2xl font-bold text-primary">
              Cleen App
            </div>

            {/* NavLink */}
            <NavLinks />
          </Container>
        </div>

        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* NaVlinks Mobile */}
        <NavLInksMobile />
      </div>
    </div>
  );
};

// prop validation
MainLayouts.propTypes = {
  children: PropTypes.node,
};

export default MainLayouts;
