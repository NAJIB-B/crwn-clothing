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
import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price, id } = cartItem;
  const { addQuantity, reduceQuantity, removeItem } =
    useContext(DropdownContext);
  const addItemQuantity = () => addQuantity(cartItem);
  const reduceItemQuantity = () => reduceQuantity(cartItem);
  const removeCartItem = () => removeItem(cartItem);

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
      <RemoveButton>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
