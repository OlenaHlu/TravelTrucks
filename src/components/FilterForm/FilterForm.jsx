import { useState } from "react";
import { useDispatch } from "react-redux";
import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import { setFilters } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";

import css from "./FilterForm.module.css";

const FilterForm = () => {
  const dispatch = useDispatch();
  const { location, vehicleType, vehicleEquipment } =
    useSelector(selectFilters);

  const handleLocationChange = (newLocation) => {
    dispatch(
      setFilters({
        location: newLocation,
        vehicleType,
        vehicleEquipment,
      })
    );
  };

  const handleEquipmentChange = (equipment) => {
    const newEquipment = vehicleEquipment.includes(equipment)
      ? vehicleEquipment.filter((item) => item !== equipment)
      : [...vehicleEquipment, equipment];

    dispatch(
      setFilters({
        location,
        vehicleType,
        vehicleEquipment: newEquipment,
      })
    );
  };

  const handleVehicleTypeChange = (newVehicleType) => {
    dispatch(
      setFilters({
        location,
        vehicleType: newVehicleType,
        vehicleEquipment,
      })
    );
  };

  const handleSearch = () => {
    if (!location && !vehicleType && vehicleEquipment.length === 0) {
      alert("Please select at least one filter before searching.");
      return;
    }

    console.log("Filters applied:", {
      location,
      vehicleType,
      vehicleEquipment,
    });
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
