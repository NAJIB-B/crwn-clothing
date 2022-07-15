import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { useState } from "react";
import "./sign-in-form.style.scss";

import {
  signAuthUserWithEmailAndPassword,
  signInWithGooglepopup,
} from "../../utils/firebase/firebase.utils";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };

  const signInWithGoogle = async () => {
    await signInWithGooglepopup();
  };
  const [formFields, setFormFeilds] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFeilds(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;

        default:
          console.error(`shit${error} tttt`);
      }
      // if (error.code === "auth/wrong-password") {
      //   alert("incorrect password");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFeilds({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          lable="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>
        <FormInput
          type="password"
          required
          lable="password"
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>
        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
