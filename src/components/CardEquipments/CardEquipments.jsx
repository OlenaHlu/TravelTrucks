import symbolDefs from "../../assets/symbol-defs.svg";
import css from "./CardEquipments.module.css";

const CardEquipments = ({
  AC,
  automatic,
  kitchen,
  TV,
  bathroom,
  microwave,
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
        {automatic && (
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
      </ul>
    </div>
  );
};

export default CardEquipments;
