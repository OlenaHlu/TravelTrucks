import symbolDefs from "../../assets/symbol-defs.svg";
import css from "./CardEquipments.module.css";

const CardEquipments = ({
  AC,
  transmission,
  kitchen,
  TV,
  bathroom,
  microwave,
  engine,
  radio,
  refrigerator,
  gas,
  water,
}) => {
  return (
    <div>
      <ul className={css.equipmentList}>
        {AC && (
          <li className={css.equipmentItem}>
            <svg className={css.eqIcon}>
              <use xlinkHref={`${symbolDefs}#${"icon-AC"}`} />
            </svg>
            AC
          </li>
        )}
        {transmission && (
          <li className={css.equipmentItem}>
            <svg className={css.eqIcon}>
              <use xlinkHref={`${symbolDefs}#${"icon-Automatic"}`} />
            </svg>
            Automatic
          </li>
        )}
        {kitchen && (
          <li className={css.equipmentItem}>
            <svg className={css.eqIcon}>
              <use xlinkHref={`${symbolDefs}#${"icon-Kitchen"}`} />
            </svg>
            Kitchen
          </li>
        )}
        {TV && (
          <li className={css.equipmentItem}>
            <svg className={css.eqIcon}>
              <use xlinkHref={`${symbolDefs}#${"icon-TV"}`} />
            </svg>
            TV
          </li>
        )}
        {bathroom && (
          <li className={css.equipmentItem}>
            <svg className={css.eqIcon}>
              <use xlinkHref={`${symbolDefs}#${"icon-Bathroom"}`} />
            </svg>
            Bathroom
          </li>
        )}
        {microwave && (
          <li className={css.equipmentItem}>
            <svg className={css.eqIcon}>
              <use xlinkHref={`${symbolDefs}#${"icon-Microwave"}`} />
            </svg>
            Microwave
          </li>
        )}
        {engine && (
          <li className={css.equipmentItem}>
            <svg className={css.eqIcon}>
              <use xlinkHref={`${symbolDefs}#${"icon-fuel-pump"}`} />
            </svg>
            Petrol
          </li>
        )}
        {radio && (
          <li className={css.equipmentItem}>
            <svg className={css.eqIcon}>
              <use xlinkHref={`${symbolDefs}#${"icon-radio"}`} />
            </svg>
            Radio
          </li>
        )}
        {refrigerator && (
          <li className={css.equipmentItem}>
            <svg className={css.eqIcon}>
              <use xlinkHref={`${symbolDefs}#${"icon-refrigerator"}`} />
            </svg>
            Refrigerator
          </li>
        )}
        {gas && (
          <li className={css.equipmentItem}>
            <svg className={css.eqIcon}>
              <use xlinkHref={`${symbolDefs}#${"icon-gas"}`} />
            </svg>
            Gas
          </li>
        )}
        {water && (
          <li className={css.equipmentItem}>
            <svg className={css.eqIcon}>
              <use xlinkHref={`${symbolDefs}#${"icon-water"}`} />
            </svg>
            Water
          </li>
        )}
      </ul>
    </div>
  );
};

export default CardEquipments;
