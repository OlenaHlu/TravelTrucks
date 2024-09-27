import { Link } from "react-router-dom";
import css from "./HomeContent.module.css";

const HomeContent = () => {
  return (
    <section className={css.homeContainer}>
      <div className={css.homeContent}>
        <div>
          <h1 className={css.homeTitle}>Campers of your dreams</h1>
          <p className={css.homeText}>
            You can find everything you want in our catalog
          </p>
        </div>
        <Link className={css.homeLink} to="/catalog">
          View Now
        </Link>
      </div>
    </section>
  );
};

export default HomeContent;
