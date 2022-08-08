import { useContext, Fragment } from "react";

import { useSelector } from "react-redux";
import CategoryPreview from "../../component/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import "./categories-preview.style.scss";
import Spinner from "../../component/spinner/spinner.component";

import { selectIsCategoriesLoading } from "../../store/categories/category.selector";
const CategoriesPreview = () => {
  const isLoading = useSelector(selectIsCategoriesLoading);
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview
              key={title}
              products={products}
              title={title}
            ></CategoryPreview>
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
