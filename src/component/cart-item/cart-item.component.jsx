import { CartItemContainer, ItemDetails, Name } from "./cart-item.style.jsx";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl}></img>
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} X {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
