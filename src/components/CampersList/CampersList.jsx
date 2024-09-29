import CamperCard from "../CamperCard/CamperCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import {
  selectCampers,
  selectError,
  selectLoading,
  selectFilters,
} from "../../redux/campers/selectors";
import Loader from "../Loader/Loader";
import { fetchCampersAll } from "../../redux/campers/operations";
import css from "./CampersList.module.css";

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCampersAll());
  }, [dispatch]);

  const filteredCampers = useMemo(() => {
    if (!Array.isArray(campers) || campers.length === 0) {
      return [];
    }

    return campers.filter((camper) => {
      // Фільтр за локацією
      if (
        filters.location &&
        !camper.location.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false;
      }

      // Фільтр за обладнанням
      if (filters.selectedEquipment.length > 0) {
        for (const equipment of filters.selectedEquipment) {
          if (!camper[equipment]) {
            return false;
          }
        }
      }

      // Фільтр за типом
      if (
        filters.selectedVehicleType &&
        filters.selectedVehicleType.toLowerCase() !== camper.type.toLowerCase()
      ) {
        return false;
      }

      return true;
    });
  }, [campers, filters]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (filteredCampers.length === 0) {
    return <p>Sorry, no camper found!</p>;
  }

  return (
    <div className={css.listContent}>
      <ul className={css.campersItem}>
        {filteredCampers.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
      <button className={css.moreBtn}>Load more</button>
    </div>
  );
};

export default CampersList;
