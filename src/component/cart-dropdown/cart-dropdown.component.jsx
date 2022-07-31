import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.style.jsx";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/dropdown/dropdown.selector.js";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const gotoCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item}></CartItem>
          ))
        ) : (
          <EmptyMessage>your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button onClick={gotoCheckoutHandler}>GO TO CHECKOUT </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
