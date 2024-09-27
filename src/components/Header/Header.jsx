import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logo from "../../assets/TravelTrucks.svg";

import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.headerContainer}>
      <Link to="/">
        <img src={logo} width="136" height="16" />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
