import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CamperPhoto from "../CamperPhoto/CamperPhoto";
import CardEquipments from "../CardEquipments/CardEquipments";
import { toggleFavorite } from "../../redux/favorites/slice";
import { selectFavorites } from "../../redux/favorites/selectors";
import css from "./CamperCard.module.css";
import symbolDefs from "../../assets/symbol-defs.svg";

const CamperCard = ({ camper }) => {
  const {
    id,
    name,
    rating,
    location,
    description,
    AC,
    transmission,
    kitchen,
    TV,
    bathroom,
    microwave,
    gallery,
    reviews,
    price,
  } = camper;

  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(id));
  };

  const maxLength = 64;
  const cutText = (description, maxLength) =>
    description.length <= maxLength
      ? description
      : description.slice(0, maxLength) + "...";

  return (
    <div className={css.cardContainer}>
      <div>
        {gallery && gallery.length > 0 && <CamperPhoto gallery={gallery} />}
      </div>
      <div className={css.cardContent}>
        <div className={css.cardInfoContent}>
          <div className={css.cardTitleContent}>
            <h3 className={css.camperTitle}>{name}</h3>
            <div className={css.info}>
              <p className={css.price}>€{price}.00</p>
              <button onClick={handleFavoriteClick}>
                <svg className={css.likeIcon}>
                  <use
                    xlinkHref={`${symbolDefs}#${
                      isFavorite ? "icon-like-fully" : "icon-like"
                    }`}
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={css.addText}>
            <div className={css.addTextItem}>
              <svg className={css.addIcon}>
                <use xlinkHref={`${symbolDefs}#${"icon-star-active"}`} />
              </svg>
              <span>
                {rating}({reviews.length} Reviews)
              </span>
            </div>
            <div className={css.addTextItem}>
              <svg className={css.addIcon}>
                <use xlinkHref={`${symbolDefs}#${"icon-map"}`} />
              </svg>
              <span>{location}</span>
            </div>
          </div>
          <p className={css.description}>{cutText(description, maxLength)}</p>
        </div>
        <div className={css.camperEq}>
          <CardEquipments
            AC={AC}
            transmission={transmission}
            kitchen={kitchen}
            TV={TV}
            bathroom={bathroom}
            microwave={microwave}
          />
        </div>
        <div className={css.bottomLink}>
          <Link className={css.camperBtn} to={`/catalog/:${id}`}>
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
