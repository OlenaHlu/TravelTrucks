import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehicleType from "../VehicleType/VehicleType";
import { setFilters, resetFilters } from "../../redux/filters/slice";
import css from "./FilterForm.module.css";
import { selectFilters } from "../../redux/filters/selectors";

const FilterForm = () => {
  const dispatch = useDispatch();

  const { location, vehicleType, vehicleEquipment } =
    useSelector(selectFilters);

  const handleLocationChange = useCallback(
    (newLocation) => {
      dispatch(
        setFilters({
          location: newLocation,
          vehicleType,
          vehicleEquipment,
        })
      );
    },
    [dispatch, vehicleType, vehicleEquipment]
  );

  const handleVehicleTypeChange = useCallback(
    (newVehicleType) => {
      dispatch(
        setFilters({
          location,
          vehicleType: newVehicleType,
          vehicleEquipment,
        })
      );
    },
    [dispatch, location, vehicleEquipment]
  );

  const handleEquipmentChange = useCallback(
    (equipment) => {
      const updatedEquipment = vehicleEquipment.includes(equipment)
        ? vehicleEquipment.filter((item) => item !== equipment)
        : [...vehicleEquipment, equipment];

      dispatch(
        setFilters({
          location,
          vehicleType,
          vehicleEquipment: updatedEquipment,
        })
      );
    },
    [dispatch, location, vehicleType, vehicleEquipment]
  );

  const handleSearch = useCallback(() => {
    dispatch(resetFilters());
    dispatch(changePage(1));

    console.log("Фільтри скинуто. Застосовуються значення:", {
      location: "",
      vehicleType: "",
      vehicleEquipment: [],
    });
  }, [dispatch]);

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
