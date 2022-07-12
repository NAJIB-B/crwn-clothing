import {
  signInWithGooglepopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglepopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <div>sign in page</div>
      <button onClick={logGoogleUser}>sign in with google popup </button>
    </div>
  );
};

export default SignIn;
