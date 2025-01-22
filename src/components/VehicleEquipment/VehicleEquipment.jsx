import React from "react";
import { useSelector } from "react-redux";
import symbolDefs from "../../assets/symbol-defs.svg";

import css from "./VehicleEquipment.module.css";

const VehicleEquipment = ({ selectedEquipment, setSelectedEquipment }) => {
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
    setSelectedEquipment(newEquipment);
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
            text={item === "transmission" ? "Automatic" : item}
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
