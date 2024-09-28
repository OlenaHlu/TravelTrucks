import React from "react";
import { useDispatch } from "react-redux";

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
    <div>
      <h3>Vehicle equipment</h3>
      <div>
        {equipmentItems.map((item) => (
          <button key={item} onClick={() => handleSelect(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VehicleEquipment;
