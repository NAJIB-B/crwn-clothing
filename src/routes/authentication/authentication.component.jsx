import SignInForm from "../../component/sign-in-form/sign-in-form.component";

import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import { AuthenticationContainer } from "./authentication.style.jsx";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </AuthenticationContainer>
  );
};

export default Authentication;
