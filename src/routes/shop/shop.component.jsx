import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../../component/product-card/product-card.component";
import "./shop.style.scss";

const Shop = () => {
  const { Product } = useContext(ProductContext);
  return (
    <div className="products-container">
      {Product.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
