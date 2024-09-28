import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CamperPhoto from "../CamperPhoto/CamperPhoto";

const CamperCard = ({ camper }) => {
  const {
    id,
    name,
    rating,
    location,
    description,
    AC,
    automatic,
    kitchen,
    TV,
    bathroom,
    microwave,
    gallery,
    reviews,
  } = camper;

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <CamperPhoto />
      </div>
      <div>
        <h3>{name}</h3>
        <div>
          <span>
            {rating}({reviews.length} Reviews)
          </span>
          <span>{location}</span>
        </div>
        <p>{description}</p>
      </div>
      <div>Equipment..</div>
      <Link to={`/catalog/${id}`}>Show more</Link>
    </div>
  );
};

export default CamperCard;
