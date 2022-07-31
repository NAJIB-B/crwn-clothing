import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ProductCardContainer, Footer } from "./product-card.style.jsx";
import { selectCartItems } from "../../store/dropdown/dropdown.selector";
import { addItemToCart } from "../../store/dropdown/dropdown.action";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`}></img>
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
