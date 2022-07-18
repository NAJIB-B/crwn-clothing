import "./checkout.style.scss";
import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";

import CheckoutItem from "../../component/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, total } = useContext(DropdownContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quality</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id}></CheckoutItem>
      ))}

      <span className="total">Total:${total}</span>
    </div>
  );
};

export default Checkout;
