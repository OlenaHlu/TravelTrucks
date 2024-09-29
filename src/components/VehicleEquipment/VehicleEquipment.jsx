import React from "react";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

  const handleSelect = (item) => {
    if (selectedEquipment.includes(item)) {
      setSelectedEquipment(selectedEquipment.filter((e) => e !== item));
    } else {
      setSelectedEquipment([...selectedEquipment, item]);
    }
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <hr className={css.line} />
      <div className={css.btnItems}>
        {equipmentItems.map((item) => (
          <button
            className={css.btn}
            key={item}
            onClick={() => handleSelect(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VehicleEquipment;
