import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  function getClassActiveLink({ isActive }) {
    return clsx(css.link, isActive && css.active);
  }
  return (
    <nav className={css.navContainer}>
      <NavLink className={getClassActiveLink} to="/">
        Home
      </NavLink>
      <NavLink className={getClassActiveLink} to="/catalog">
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
