import css from "./VehicleType.module.css";
import symbolDefs from "../../assets/symbol-defs.svg";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";

const VehicleType = () => {
  const dispatch = useDispatch();

  const {
    location,
    vehicleType: selectedType,
    vehicleEquipment,
  } = useSelector(selectFilters);

  const vehicleTypes = ["Van", "Fully Integrated", "Alcove"];

  const handleSelect = (type) => {
    dispatch(
      setFilters({
        location,
        vehicleType: type,
        vehicleEquipment,
      })
    );
  };
  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle type</h3>
      <hr className={css.line} />
      <div className={css.btnItems}>
        {vehicleTypes.map((type) => (
          <button
            className={`${css.btn} ${selectedType === type ? css.active : ""}`}
            key={type}
            onClick={() => handleSelect(type)}
          >
            <svg className={css.listImg}>
              <use href={`${symbolDefs}#icon-${type}`}></use>
            </svg>
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};
export default VehicleType;
