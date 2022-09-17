import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  RemoveButton,
  Value,
  Arrow,
  Price,
} from "./checkout-item.style.jsx";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/dropdown/dropdown.selector";
import {
  addQuantity,
  reduceQuantity,
  removeItem,
} from "../../store/dropdown/dropdown.action";
import { useDispatch } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, imageUrl, quantity, price, id } = cartItem;

  const addItemQuantity = () => dispatch(addQuantity(cartItems, cartItem));
  const reduceItemQuantity = () =>
    dispatch(reduceQuantity(cartItems, cartItem));
  const removeCartItem = () => dispatch(removeItem(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`}></img>
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow as="span" onClick={reduceItemQuantity}>
          &#10094;
        </Arrow>
        <Value> {quantity}</Value>
        <Arrow onClick={addItemQuantity}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={removeCartItem}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
