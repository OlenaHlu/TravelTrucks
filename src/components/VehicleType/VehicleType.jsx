import css from "./VehicleType.module.css";

const VehicleType = ({ selectedVehicleType, setSelectedVehicleType }) => {
  const vehicleTypes = ["Van", "Fully Integrated", "Alcove"];

  const handleSelect = (type) => {
    setSelectedVehicleType(type);
  };
  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle type</h3>
      <hr className={css.line} />
      <div className={css.btnItems}>
        {vehicleTypes.map((type) => (
          <button
            className={css.btn}
            key={type}
            onClick={() => handleSelect(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};
export default VehicleType;
