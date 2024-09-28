const VehicleType = ({ selectedVehicleType, setSelectedVehicleType }) => {
  const vehicleTypes = ["Van", "Fully Integrated", "Alcove"];

  const handleSelect = (type) => {
    if (selectedVehicleType.includes(type)) {
      setSelectedVehicleType(selectedVehicleType.filter((e) => e !== type));
    } else {
      setSelectedVehicleType([...selectedVehicleType, type]);
    }
  };

  return (
    <div>
      <h3>Vehicle type</h3>
      <div>
        {vehicleTypes.map((type) => (
          <button key={type} onClick={() => handleSelect(type)}>
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};
export default VehicleType;
