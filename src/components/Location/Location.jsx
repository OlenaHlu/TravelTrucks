import React from "react";

const Location = ({ location, setLocation }) => {
  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      <label htmlFor="location">Location</label>
      <input
        id="location"
        type="text"
        value={location}
        onChange={handleChange}
        placeholder="Kyiv, Ukraine"
      />
    </div>
  );
};

export default Location;
