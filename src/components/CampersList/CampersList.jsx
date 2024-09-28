import CamperCard from "../CamperCard/CamperCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectCampers,
  selectError,
  selectLoading,
  selectFilters,
} from "../../redux/campers/selectors";
import Loader from "../Loader/Loader";
import { fetchCampersAll } from "../../redux/campers/operations";

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCampersAll());
  }, [dispatch]);
  const filteredCampers = campers.filter((camper) => {
    if (
      filters.location &&
      !camper.location.toLowerCase().includes(filters.location.toLowerCase())
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

    if (
      filters.selectedVehicleType &&
      filters.selectedVehicleType !== camper.type
    ) {
      return false;
    }

    return true;
  });

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
    <div>
      <ul>
        {filteredCampers.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampersList;
