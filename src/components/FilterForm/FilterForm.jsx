import { useState } from "react";
import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";

const FilterForm = () => {
  const [location, setLocation] = useState("Kyiv, Ukraine");
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState([]);

  const handleSearch = () => {
    console.log("Location:", location);
    console.log("Selected Equipment:", selectedEquipment);
    console.log("Selected Vehicle Type:", selectedVehicleType);
  };
  return (
    <div>
      <Location location={location} setLocation={setLocation} />
      <h3>Filters</h3>
      <VehicleEquipment />
      <VehicleType />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default FilterForm;
