import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.style.jsx";
import PaymentForm from "../../component/payment-form/payment-form.component.jsx";

import { useSelector } from "react-redux";
import CheckoutItem from "../../component/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectTotal,
} from "../../store/dropdown/dropdown.selector.js";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectTotal);
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
      <PaymentForm></PaymentForm>
    </CheckoutContainer>
  );
};

export default Checkout;
