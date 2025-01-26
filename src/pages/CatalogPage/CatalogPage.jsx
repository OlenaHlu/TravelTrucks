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
      <div className={css.header}>
        <Header />
      </div>
      <div className={css.catalogContainer}>
        {loading && <Loader />}
        <FilterForm />
        {!error ? (
          <div className={css.listContainer}>
            <CampersList campers={campers} />
            {!loading && page < totalPages && (
              <button className={css.loadMoreBtn} onClick={handleLoadMore}>
                Load More
              </button>
            )}
          </div>
        ) : (
          <p className={css.errorText}>Error: {error}</p>
        )}
      </div>
    </>
  );
};

export default CatalogPage;
