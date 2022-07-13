import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglepopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import { async } from "@firebase/util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglepopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <div>sign in page</div>
      <button onClick={logGoogleUser}>sign in with google popup </button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
