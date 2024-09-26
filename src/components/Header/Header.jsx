import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logo from "../../assets/TravelTrucks.svg";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} width="136" height="15" />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
