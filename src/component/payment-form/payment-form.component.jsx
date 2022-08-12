import { CardElement, useElements } from "@stripe/react-stripe-js";
import { useStripe } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentContainer, FormContainer } from "./payment-form.styles";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const response = await fetch(
      "/.netlify/functions/create-payment-intent.js",
      {
        method: "post",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 10000 }),
      }
    ).then((res) => res.json());
    console.log(response);
  };
  return (
    <PaymentContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>credit card payment</h2>
        <CardElement></CardElement>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>pay now </Button>
      </FormContainer>
    </PaymentContainer>
  );
};
export default PaymentForm;
