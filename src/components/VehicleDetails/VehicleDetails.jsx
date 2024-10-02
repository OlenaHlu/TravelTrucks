import css from "./VehicleDetails.module.css";

const VehicleDetails = ({ form, length, width, height, tank, consumption }) => {
  return (
    <div className={css.vehicleDetailsContainer}>
      <ul>
        <li className={css.detailsItem}>
          <span className={css.itemLabel}>Form</span>
          <span className={css.itemValue}>{form}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.itemLabel}>Length</span>
          <span className={css.itemValue}>{length}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.itemLabel}>Width</span>
          <span className={css.itemValue}>{width}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.itemLabel}>Height</span>
          <span className={css.itemValue}>{height}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.itemLabel}>Tank</span>
          <span className={css.itemValue}>{tank}</span>
        </li>
        <li className={css.detailsItem}>
          <span className={css.itemLabel}>Consumption</span>
          <span className={css.itemValue}>{consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
