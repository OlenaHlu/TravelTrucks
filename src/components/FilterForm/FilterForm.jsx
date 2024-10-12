import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import {
  setLocation,
  setVehicleType,
  toggleEquipment,
  resetFilters,
} from "../../redux/campers/slice";

import css from "./FilterForm.module.css";
import { selectFilters } from "../../redux/campers/selectors";

const FilterForm = () => {
  const dispatch = useDispatch();

  const { location, selectedVehicleType, selectedEquipment } =
    useSelector(selectFilters);

  // Обробники подій для зміни фільтрів
  const handleLocationChange = useCallback(
    (newLocation) => {
      dispatch(setLocation(newLocation));
    },
    [dispatch]
  );

  const handleVehicleTypeChange = useCallback(
    (vehicleType) => {
      dispatch(setVehicleType(vehicleType));
    },
    [dispatch]
  );

  const handleEquipmentChange = useCallback(
    (equipment) => {
      dispatch(toggleEquipment(equipment));
    },
    [dispatch]
  );

  const handleSearch = useCallback(() => {
    dispatch(resetFilters());

    console.log("Фільтри застосовані:", {
      location,
      selectedVehicleType,
      selectedEquipment,
    });
  }, [location, selectedVehicleType, selectedEquipment]);

  return (
    <div>
      <Location location={location} setLocation={handleLocationChange} />
      <div className={css.filters}>
        <h3 className={css.title}>Filters</h3>
        <VehicleEquipment
          selectedEquipment={selectedEquipment}
          setSelectedEquipment={handleEquipmentChange}
        />
        <VehicleType
          selectedVehicleType={selectedVehicleType}
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
