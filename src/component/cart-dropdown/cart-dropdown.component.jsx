import "./cart-dropdown.style.scss";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(DropdownContext);
  const navigate = useNavigate();
  const gotoCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items ">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
      </div>

      <Button onClick={gotoCheckoutHandler}>GO TO CHECKOUT </Button>
    </div>
  );
};

export default CartDropdown;
