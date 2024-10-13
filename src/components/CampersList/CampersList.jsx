import CamperCard from "../CamperCard/CamperCard";
import css from "./CampersList.module.css";

const CampersList = ({ totalPages, page, handleLoadMore, campers }) => {
  // console.log("Campers: ", campers);
  return (
    <div className={css.listContent}>
      <ul className={css.campersItem}>
        {campers.map((camper) => {
          return (
            <li key={camper.id}>
              <CamperCard camper={camper} />
            </li>
          );
        })}
      </ul>
      {totalPages > page ? (
        <button onClick={handleLoadMore} className={css.moreBtn}>
          Load More
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CampersList;
