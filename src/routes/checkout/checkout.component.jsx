import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.style.jsx";
import { useContext } from "react";
import { DropdownContext } from "../../contexts/dropdown.context";

import CheckoutItem from "../../component/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, total } = useContext(DropdownContext);
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quality</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id}></CheckoutItem>
      ))}

      <Total>Total:${total}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
