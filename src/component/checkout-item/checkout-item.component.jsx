import "./checkout-item.style.scss";
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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={reduceItemQuantity}>
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={addItemQuantity}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
