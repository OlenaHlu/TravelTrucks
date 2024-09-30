import css from "./Reviews.module.css";
import BookForm from "../BookForm/BookForm";

const Reviews = () => {
  return (
    <div className={css.revContainer}>
      <div></div>
      <BookForm />
    </div>
  );
};

export default Reviews;
