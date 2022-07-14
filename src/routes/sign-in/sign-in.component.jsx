import SignInForm from "../../component/sign-in-form/sign-in-form.component";

import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import "./authentication.style.scss";

const SignIn = () => {
  return (
    <div className="authentication-container">
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
