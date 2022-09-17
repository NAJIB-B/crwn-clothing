import { CategoryTitle, CategoryContainer } from "./category.style";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";
import Spinner from "../../component/spinner/spinner.component";
import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from "../../store/categories/category.selector";
import ProductCard from "../../component/product-card/product-card.component";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <CategoryTitle>{category.toLowerCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
