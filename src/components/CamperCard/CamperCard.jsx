import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CamperPhoto from "../CamperPhoto/CamperPhoto";
import CardEquipments from "../CardEquipments/CardEquipments";
import { toggleFavorite } from "../../redux/campers/slice";

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

  const favorites = useSelector((state) => state.favorites) || [];
  const isFavorite = favorites.includes(id);
  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <div>
      <div>
        {gallery && gallery.length > 0 && <CamperPhoto gallery={gallery} />}
      </div>
      <div>
        <h3>{name}</h3>
        <button onClick={handleFavoriteClick}>
          {isFavorite ? (
            <span role="img" aria-label="favorite">
              ❤️
            </span>
          ) : (
            <span role="img" aria-label="not favorite">
              🤍
            </span>
          )}
        </button>
        <div>
          <span>
            {rating}({reviews.length} Reviews)
          </span>
          <span>{location}</span>
        </div>
        <p>{description}</p>
      </div>
      <CardEquipments
        AC={AC}
        automatic={automatic}
        kitchen={kitchen}
        TV={TV}
        bathroom={bathroom}
        microwave={microwave}
      />
      <Link to={`/catalog/${id}`}>Show more</Link>
    </div>
  );
};

export default CamperCard;
