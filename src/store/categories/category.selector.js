import { createSelector } from "reselect";

const selectCategoryReducers = (state) => state.categories;

const selectCategories = createSelector(
  [selectCategoryReducers],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);

export const selectIsCategoriesLoading = createSelector(
  [selectCategoryReducers],
  (categoriesSlice) => categoriesSlice.isLoading
);
