import css from "./Location.module.css";
import { BsMap } from "react-icons/bs";

const Location = ({ location, setLocation }) => {
  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className={css.container}>
      <label htmlFor="location" className={css.label}>
        Location
      </label>
      <div className={css.iconPosition}>
        <BsMap className={css.icon} />
        <input
          className={css.input}
          id="location"
          type="text"
          value={location}
          onChange={handleChange}
          placeholder="Kyiv, Ukraine"
        />
      </div>
    </div>
  );
};

export default Location;
