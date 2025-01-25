// import { useDispatch, useSelector } from "react-redux";
// import Location from "../Location/Location";
// import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
// import VehicleType from "../VehicleType/VehicleType";
// import { setFilters } from "../../redux/filters/slice";
// import { selectFilters } from "../../redux/filters/selectors";

// import css from "./FilterForm.module.css";

// const FilterForm = () => {
//   const dispatch = useDispatch();

//   const filters = useSelector(selectFilters) || {};
//   const { location = "", vehicleType = "", vehicleEquipment = [] } = filters;

//   const handleLocationChange = (newLocation) => {
//     dispatch(
//       setFilters({
//         location: newLocation,
//         vehicleType,
//         vehicleEquipment,
//       })
//     );
//   };

//   const handleEquipmentChange = (equipment) => {
//     const flatEquipment = vehicleEquipment.flat();
//     const newEquipment = flatEquipment.includes(equipment)
//       ? flatEquipment.filter((item) => item !== equipment)
//       : [...flatEquipment, equipment];

//     dispatch(
//       setFilters({
//         location,
//         vehicleType,
//         vehicleEquipment: newEquipment,
//       })
//     );
//   };

//   const handleVehicleTypeChange = (newVehicleType) => {
//     dispatch(
//       setFilters({
//         location,
//         vehicleType: newVehicleType,
//         vehicleEquipment,
//       })
//     );
//   };

//   const handleSearch = () => {
//     if (!location && !vehicleType && vehicleEquipment.length === 0) {
//       alert("Please select at least one filter before searching.");
//       return;
//     }

//     console.log("Filters applied:", {
//       location,
//       vehicleType,
//       vehicleEquipment,
//     });
//   };

//   return (
//     <div>
//       <Location location={location} setLocation={handleLocationChange} />
//       <div className={css.filters}>
//         <h3 className={css.title}>Filters</h3>
//         <VehicleEquipment
//           selectedEquipment={vehicleEquipment}
//           setSelectedEquipment={handleEquipmentChange}
//         />
//         <VehicleType
//           selectedVehicleType={vehicleType}
//           setSelectedVehicleType={handleVehicleTypeChange}
//         />
//       </div>
//       <button className={css.btn} onClick={handleSearch}>
//         Search
//       </button>
//     </div>
//   );
// };

// export default FilterForm;
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

  // Локальний стан для тимчасових змін
  const [tempFilters, setTempFilters] = useState({
    location,
    vehicleType,
    vehicleEquipment,
  });

  const handleLocationChange = (newLocation) => {
    setTempFilters((prev) => ({
      ...prev,
      location: newLocation,
    }));
  };

  const handleEquipmentChange = (equipment) => {
    setTempFilters((prev) => {
      const currentEquipment = prev.vehicleEquipment;
      const newEquipment = currentEquipment.includes(equipment)
        ? currentEquipment.filter((item) => item !== equipment)
        : [...currentEquipment, equipment];

      return {
        ...prev,
        vehicleEquipment: newEquipment,
      };
    });
  };

  const handleVehicleTypeChange = (newVehicleType) => {
    setTempFilters((prev) => ({
      ...prev,
      vehicleType: newVehicleType,
    }));
  };

  const handleSearch = () => {
    if (
      !tempFilters.location &&
      !tempFilters.vehicleType &&
      tempFilters.vehicleEquipment.length === 0
    ) {
      alert("Please select at least one filter before searching.");
      return;
    }

    // Застосовуємо локальні зміни до глобального стану
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
