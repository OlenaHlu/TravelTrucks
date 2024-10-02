import css from "./Features.module.css";
import BookForm from "../BookForm/BookForm";
import CardEquipments from "../CardEquipments/CardEquipments";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";

const Features = () => {
  const {
    AC,
    automatic,
    kitchen,
    TV,
    bathroom,
    microwave,
    engine,
    radio,
    refrigerator,
    gas,
    water,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = useSelector(selectCamper);

  const equipmentProps = {
    AC,
    automatic,
    kitchen,
    TV,
    bathroom,
    microwave,
    engine,
    radio,
    refrigerator,
    gas,
    water,
  };

  const vehicleProps = { form, length, width, height, tank, consumption };

  return (
    <div className={css.feaContainer}>
      <div className={css.leftContainer}>
        <CardEquipments {...equipmentProps} />
        <div>
          <h3 className={css.vhTitle}>Vehicle details</h3>
          <VehicleDetails {...vehicleProps} />
        </div>
      </div>
      <BookForm />
    </div>
  );
};

export default Features;
