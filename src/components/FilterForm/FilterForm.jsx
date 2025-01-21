import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import { setFilters, resetFilters } from "../../redux/filters/slice";
import css from "./FilterForm.module.css";
import { selectFilters } from "../../redux/filters/selectors";

const FilterForm = () => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [vehicleEquipment, setVehicleEquipment] = useState([]);
  const [vehicleType, setVehicleType] = useState("");

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
  };

  const handleEquipmentChange = (equipment) => {
    setVehicleEquipment((prev) =>
      prev.includes(equipment)
        ? prev.filter((item) => item !== equipment)
        : [...prev, equipment]
    );
  };

  const handleVehicleTypeChange = (newVehicleType) => {
    setVehicleType(newVehicleType);
  };

  const handleSearch = () => {
    dispatch(
      setFilters({
        location,
        vehicleType,
        vehicleEquipment,
      })
    );
  };

  return (
    <div>
      <Location location={location} setLocation={handleLocationChange} />
      <div className={css.filters}>
        <h3 className={css.title}>Filters</h3>
        <VehicleEquipment
          selectedEquipment={vehicleEquipment}
          setSelectedEquipment={handleEquipmentChange}
        />
        <VehicleType
          selectedVehicleType={vehicleType}
          setSelectedVehicleType={handleVehicleTypeChange}
        />
      </div>
      <button className={css.btn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default FilterForm;
