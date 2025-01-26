import Header from "../../components/Header/Header";
import HomeContent from "../../components/HomeContent/HomeContent";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={css.header}>
        <Header />
      </div>

      <HomeContent />
    </>
  );
};

export default HomePage;
