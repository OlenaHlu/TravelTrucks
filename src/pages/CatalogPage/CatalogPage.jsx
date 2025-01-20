import FilterForm from "../../components/FilterForm/FilterForm";
import Header from "../../components/Header/Header";
import CampersList from "../../components/CampersList/CampersList";
import {
  selectCampers,
  selectError,
  selectLoading,
  selectPage,
  selectTotalPages,
} from "../../redux/campers/selectors";
import { selectFilters } from "../../redux/filters/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCampersAll } from "../../redux/campers/operations";
import Loader from "../../components/Loader/Loader";
import { changePage, resetCampers } from "../../redux/campers/slice";

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
    dispatch(resetCampers());
    dispatch(fetchCampersAll({ page: 1, filters }));
  }, [dispatch, filters]);

  useEffect(() => {
    dispatch(fetchCampersAll({ page, filters }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      dispatch(changePage(page + 1));
    }
  };
  return (
    <>
      <Header />
      {!loading ? (
        <div className={css.catalogContainer}>
          <FilterForm />
          {!error ? (
            <CampersList
              campers={campers}
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
