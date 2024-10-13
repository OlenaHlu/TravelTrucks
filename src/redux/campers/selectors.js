export const selectCampers = (state) => state.campers.items;

export const selectCamper = (state) => state.campers.camper;

export const selectLoading = (state) => state.campers.loading;

export const selectError = (state) => state.campers.error;

export const selectFilters = (state) => state.campers.filters;

export const selectPage = (state) => state.campers.page;

export const selectTotal = (state) => state.campers.total;

const itemsPerPage = 5;

export const selectTotalPages = (state) => {
  return Math.ceil(state.campers.total / itemsPerPage);
};
