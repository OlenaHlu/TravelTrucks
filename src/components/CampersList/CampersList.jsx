import CamperCard from "../CamperCard/CamperCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  selectCampers,
  selectError,
  selectLoading,
} from "../../redux/campers/selectors";
import Loader from "../Loader/Loader";
import { fetchCampersAll } from "../../redux/campers/operations";

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampersAll());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  if (!loading && campers.length === 0) {
    return <p>Sorry, no camper found!</p>;
  }

  return (
    <div>
      <ul>
        {campers.map((camper) => (
          <li key={camper.id}>
            <CamperCard camper={camper} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampersList;
