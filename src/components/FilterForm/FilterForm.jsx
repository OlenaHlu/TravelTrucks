import { useState } from "react";
import { useDispatch } from "react-redux";
import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import { setFilters } from "../../redux/campers/slice";

const FilterForm = () => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState([]);

  const handleSearch = () => {
    dispatch(
      setFilters({
        location,
        selectedVehicleType,
        selectedEquipment,
      })
    );
  };

  return (
    <div>
      <Location location={location} setLocation={setLocation} />
      <h3>Filters</h3>
      <VehicleEquipment
        selectedEquipment={selectedEquipment}
        setSelectedEquipment={setSelectedEquipment}
      />
      <VehicleType
        selectedVehicleType={selectedVehicleType}
        setSelectedVehicleType={setSelectedVehicleType}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default FilterForm;
