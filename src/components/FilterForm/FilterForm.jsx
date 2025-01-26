import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import { setFilters } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";

import css from "./FilterForm.module.css";

const FilterForm = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters) || {};
  const { location = "", vehicleType = "", vehicleEquipment = [] } = filters;

  const [tempFilters, setTempFilters] = useState({
    location,
    vehicleType,
    vehicleEquipment: { ...vehicleEquipment },
  });

  const handleLocationChange = (newLocation) => {
    setTempFilters((prev) => ({
      ...prev,
      location: newLocation,
    }));
  };

  const handleEquipmentChange = (equipment) => {
    setTempFilters((prev) => ({
      ...prev,
      vehicleEquipment: {
        ...prev.vehicleEquipment,
        [equipment]: !prev.vehicleEquipment[equipment],
      },
    }));
  };

  const handleVehicleTypeChange = (newVehicleType) => {
    setTempFilters((prev) => ({
      ...prev,
      vehicleType: newVehicleType,
    }));
  };

  const handleSearch = () => {
    const hasSelectedEquipment = Object.values(
      tempFilters.vehicleEquipment
    ).some((value) => value);

    if (
      !tempFilters.location &&
      !tempFilters.vehicleType &&
      !hasSelectedEquipment
    ) {
      alert("Please select at least one filter before searching.");
      return;
    }

    dispatch(setFilters(tempFilters));
    console.log("Filters applied:", tempFilters);
  };

  return (
    <div>
      <Location
        location={tempFilters.location}
        setLocation={handleLocationChange}
      />
      <div className={css.filters}>
        <h3 className={css.title}>Filters</h3>
        <VehicleEquipment
          selectedEquipment={tempFilters.vehicleEquipment}
          setSelectedEquipment={handleEquipmentChange}
        />
        <VehicleType
          selectedVehicleType={tempFilters.vehicleType}
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
