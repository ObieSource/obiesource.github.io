import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="obs__navbar ">
      <div className="obs__navbar-links">
        <div className="obs__navbar-links_logo">
          <p>
            <Link to="/">ObieSource</Link>
          </p>
        </div>
        <div className="obs__navbar-links_container">
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/members">Members</Link>
          </p>
          <p>
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </div>
      <div className="obs__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="obs__navbar-menu_container">
            <div className="obs__navbar-menu_container-links">
              <p>
                <Link to="/about">About</Link>
              </p>
              <p>
                <Link to="/members">Members</Link>
              </p>
              <p>
                <Link to="/contact">Contact</Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
