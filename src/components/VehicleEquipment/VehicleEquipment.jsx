import React from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./VehicleEquipment.module.css";
import symbolDefs from "../../assets/symbol-defs.svg";
import { setFilters } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";

const VehicleEquipment = () => {
  const dispatch = useDispatch();

  const {
    location,
    vehicleType,
    vehicleEquipment: selectedEquipment,
  } = useSelector(selectFilters);

  const equipmentItems = [
    "AC",
    "Automatic",
    "Kitchen",
    "TV",
    "Bathroom",
    "Microwave",
  ];

  const handleSelect = (item) => {
    const newEquipment = selectedEquipment.includes(item)
      ? selectedEquipment.filter((equipment) => equipment !== item)
      : [...selectedEquipment, item];
    dispatch(
      setFilters({
        location,
        vehicleType,
        vehicleEquipment: newEquipment,
      })
    );
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <hr className={css.line} />
      <div className={css.btnItems}>
        {equipmentItems.map((item) => (
          <button
            className={`${css.btn} ${
              selectedEquipment.includes(item) ? css.active : ""
            }`}
            key={item}
            onClick={() => handleSelect(item)}
          >
            <svg className={css.listImg}>
              <use href={`${symbolDefs}#icon-${item}`}></use>
            </svg>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VehicleEquipment;
