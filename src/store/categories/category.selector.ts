import { createSelector } from "reselect";
import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";

const selectCategoryReducers = (state): CategoriesState => state.categories;

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
    }, {} as CategoryMap);
  }
);

export const selectIsCategoriesLoading = createSelector(
  [selectCategoryReducers],
  (categoriesSlice) => categoriesSlice.isLoading
);
