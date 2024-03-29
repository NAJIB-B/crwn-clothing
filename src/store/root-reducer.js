import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { dropdownReducer } from "./dropdown/dropdown.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  dropdown: dropdownReducer,
});
