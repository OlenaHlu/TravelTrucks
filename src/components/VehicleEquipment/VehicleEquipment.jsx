import React from "react";
import symbolDefs from "../../assets/symbol-defs.svg";

import css from "./VehicleEquipment.module.css";

const VehicleEquipment = ({ selectedEquipment, setSelectedEquipment }) => {
  const equipmentItems = [
    "AC",
    "transmission",
    "Kitchen",
    "TV",
    "Bathroom",
    "Microwave",
  ];

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <hr className={css.line} />
      <div className={css.btnItems}>
        {equipmentItems.map((item) => {
          const displayText = item === "transmission" ? "Automatic" : item;

          return (
            <button
              className={`${css.btn} ${
                selectedEquipment[item] ? css.active : ""
              }`}
              key={item}
              onClick={() => setSelectedEquipment(item)}
            >
              <svg className={css.listImg}>
                <use href={`${symbolDefs}#icon-${item}`}></use>
              </svg>
              <p className={css.text}>{displayText}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default VehicleEquipment;
