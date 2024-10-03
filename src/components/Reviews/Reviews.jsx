import css from "./Reviews.module.css";
import BookForm from "../BookForm/BookForm";
import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
import ReviewsList from "../ReviewsList/ReviewsList";

const Reviews = () => {
  const { reviews = [] } = useSelector(selectCamper);

  return (
    <div className={css.revContainer}>
      <ReviewsList reviews={reviews} />
      <BookForm />
    </div>
  );
};

export default Reviews;
