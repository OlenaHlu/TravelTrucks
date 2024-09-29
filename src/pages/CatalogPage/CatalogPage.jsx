import FilterForm from "../../components/FilterForm/FilterForm";
import Header from "../../components/Header/Header";
import CampersList from "../../components/CampersList/CampersList";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <>
      <Header />
      <div className={css.catalogContainer}>
        <FilterForm />
        <CampersList />
      </div>
    </>
  );
};

export default CatalogPage;
