import { useState } from "react";
import { useDispatch } from "react-redux";
import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import { setFilters } from "../../redux/campers/slice";

import css from "./FilterForm.module.css";

const FilterForm = () => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState("");

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
      <div className={css.felters}>
        <h3 className={css.title}>Filters</h3>
        <VehicleEquipment
          selectedEquipment={selectedEquipment}
          setSelectedEquipment={setSelectedEquipment}
        />
        <VehicleType
          selectedVehicleType={selectedVehicleType}
          setSelectedVehicleType={setSelectedVehicleType}
        />
      </div>
      <button className={css.btn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default FilterForm;
