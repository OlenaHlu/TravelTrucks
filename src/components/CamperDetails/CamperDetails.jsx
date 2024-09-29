import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/campers/selectors";
import CamperPhoto from "../CamperPhoto/CamperPhoto";
import CamperTabs from "../CamperTabs/CamperTabs";

import css from "./CamperDetails.module.css";
import symbolDefs from "../../assets/symbol-defs.svg";

const CamperDetails = ({ camper = {} }) => {
  const {
    name,
    rating,
    location,
    gallery = [],
    reviews = [],
    price,
    description,
  } = camper;

  const loading = useSelector(selectLoading);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={css.mainContainer}>
          <div className={css.dtContainer}>
            <h2 className={css.dtTitle}>{name}</h2>
            <div className={css.info}>
              <div>
                <svg className={css.addIcon}>
                  <use xlinkHref={`${symbolDefs}#${"icon-star-active"}`} />
                </svg>
                <span>
                  {rating}({reviews.length} Reviews)
                </span>
              </div>
              <div>
                <svg className={css.addIcon}>
                  <use xlinkHref={`${symbolDefs}#${"icon-map"}`} />
                </svg>
                <span>{location}</span>
              </div>
            </div>
            <p className={css.price}>€{price},00</p>
          </div>
          <CamperPhoto gallery={gallery || []} showAll />

          <p className={css.description}>{description}</p>
          <CamperTabs />
        </div>
      )}
    </>
  );
};

export default CamperDetails;
