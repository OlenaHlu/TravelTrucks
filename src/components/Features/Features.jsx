import css from "./Features.module.css";
import BookForm from "../BookForm/BookForm";

const Features = () => {
  return (
    <div className={css.feaContainer}>
      <div className={css.leftContainer}></div>
      <BookForm />
    </div>
  );
};

export default Features;
