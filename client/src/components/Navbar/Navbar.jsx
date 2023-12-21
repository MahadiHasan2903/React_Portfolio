import { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "../../data";

import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav_menu show-menu" : "nav_menu"}`}>
        <ul className="nav_list">
          {links.map(({ id, name, icon, path }) => (
            <li className="nav_item" key={id}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "nav_link active-nav" : "nav_link"
                }
                onClick={toggleMenu}
              >
                {icon}
                <h3 className="nav_name">{name}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`${showMenu ? "nav_toggle animate-toggle" : "nav_toggle"}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
