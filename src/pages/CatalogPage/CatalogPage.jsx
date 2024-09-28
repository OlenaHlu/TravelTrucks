import FilterForm from "../../components/FilterForm/FilterForm";
import Header from "../../components/Header/Header";
import CampersList from "../../components/CampersList/CampersList";

const CatalogPage = () => {
  return (
    <>
      <Header />
      <FilterForm />
      <CampersList />
    </>
  );
};

export default CatalogPage;
