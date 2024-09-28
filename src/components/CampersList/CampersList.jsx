import CamperCard from "../CamperCard/CamperCard";
import { useSelector } from "react-redux";
import {
  selectCampers,
  selectError,
  selectLoading,
} from "../../redux/campers/selectors";
import Loader from "../Loader/Loader";

const CampersList = () => {
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {campers.length > 0 ? (
        <ul>
          {campers.map((camper) => (
            <li key={camper.id}>
              <CamperCard camper={camper} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, no camper found!</p>
      )}
    </div>
  );
};

export default CampersList;
