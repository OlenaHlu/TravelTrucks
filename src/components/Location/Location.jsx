import React from "react";

const Location = ({ location, setLocation }) => {
  return (
    <div>
      <label>Location</label>
      <div>{location}</div>
    </div>
  );
};

export default Location;
