import { useContext, Fragment } from "react";

import { useSelector } from "react-redux";
import CategoryPreview from "../../component/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import "./categories-preview.style.scss";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview
            key={title}
            products={products}
            title={title}
          ></CategoryPreview>
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
