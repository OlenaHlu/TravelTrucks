import CamperCard from "../CamperCard/CamperCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectCampers,
  selectError,
  selectLoading,
  selectFilters,
} from "../../redux/campers/selectors";
import React, { useState } from "react";
import Loader from "../Loader/Loader";
import { fetchCampersAll } from "../../redux/campers/operations";
import css from "./CampersList.module.css";

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);

  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const filteredCampers = campers.filter((camper) => {
    if (
      filters.location &&
      !camper.location.toLowerCase().includes(filters.location.toLowerCase())
    ) {
      return false;
    }

    if (
      filters.selectedVehicleType &&
      filters.selectedVehicleType !== camper.type
    ) {
      return false;
    }

    if (filters.selectedEquipment.length > 0) {
      for (const equipment of filters.selectedEquipment) {
        if (!camper[equipment]) {
          return false;
        }
      }
    }

    return true;
  });

  const visibleCampers = campers.slice(0, visibleCount);
  useEffect(() => {
    dispatch(fetchCampersAll());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (campers.length === 0) {
    return <p>Sorry, no campers available.</p>;
  }

  return (
    <div className={css.listContent}>
      <ul className={css.campersItem}>
        {visibleCampers.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      {visibleCount < filteredCampers.length && (
        <button onClick={handleLoadMore} className={css.moreBtn}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CampersList;
