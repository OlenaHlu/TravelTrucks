import FilterForm from "../../components/FilterForm/FilterForm";
import Header from "../../components/Header/Header";
import CampersList from "../../components/CampersList/CampersList";
import {
  selectCampers,
  selectError,
  selectLoading,
  selectFilters,
  selectPage,
  selectTotalPages,
} from "../../redux/campers/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCampersAll } from "../../redux/campers/operations";
import Loader from "../../components/Loader/Loader";
import { changePage } from "../../redux/campers/slice";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  // console.log("Campers: ", campers);
  // console.log("Filters: ", filters);
  // console.log("Page: ", page);

  useEffect(() => {
    dispatch(fetchCampersAll());
  }, [dispatch, filters, page]);

  const filterCampers = (campers, filters) => {
    return campers.filter((camper) => {
      const matchesLocation =
        !filters.location || camper.location.includes(filters.location);
      const matchesVehicleType =
        !filters.selectedVehicleType ||
        camper.form === filters.selectedVehicleType;

      const matchesEquipment = filters.selectedEquipment.every(
        (equipment) => camper[equipment] === true
      );

      return matchesLocation && matchesVehicleType && matchesEquipment;
    });
  };

  const filteredCampers = filterCampers(campers, filters);

  const handleLoadMore = () => {
    dispatch(changePage(page + 1));
  };
  return (
    <>
      <Header />
      {!loading ? (
        <div className={css.catalogContainer}>
          <FilterForm />
          {!error ? (
            <CampersList
              campers={filteredCampers}
              totalPages={totalPages}
              page={page}
              handleLoadMore={handleLoadMore}
            ></CampersList>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <Loader></Loader>
      )}
    </>
  );
};

export default CatalogPage;
