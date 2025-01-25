import CamperCard from "../CamperCard/CamperCard";
import css from "./CampersList.module.css";

const CampersList = ({ campers }) => {
  if (!campers || campers.length === 0) {
    return <p>No campers available.</p>;
  }
  return (
    <div className={css.listContent}>
      <ul className={css.campersItem}>
        {campers.map((camper) => {
          return (
            <li key={camper.id} className={css.card}>
              <CamperCard camper={camper} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CampersList;
