import { CategoryTitle, CategoryContainer } from "./category.style.jsx";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector.js";
import ProductCard from "../../component/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <Fragment>
      <CategoryTitle>{category.toLowerCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
