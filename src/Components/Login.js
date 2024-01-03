import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE, TEST_USER_EMAIL, TEST_USER_PASSWORD } from "../utils/constants";

const Login = () => {

    const dispatch = useDispatch();
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef();
    const password = useRef();
    const name = useRef();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const handleSignInToggle = () => {
        setIsSignIn(!isSignIn);
    }

    const handleButtonClick = () => {

        let message = "";
        //ref will return the reference of the text under current.
        {
            !isSignIn ? message = validateData(email.current.value, password.current.value, name.current.value) :
                validateData(email.current.value, password.current.value, null)
        };

        setErrorMessage(message);
        if (message) return;

        if (!isSignIn) {
            //sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    //Update the name of the user in store.
                    updateProfile(user, {
                        displayName: name.current.value
                    }).then(() => {

                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            Email: email,
                            displayName: displayName
                        }));
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    setErrorMessage(errorCode + " " + errorMessage);
                });
        }

        else {
            //sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ":" + errorMessage);
                });
        }

    }

    const handleTestUserButtonClick = () => {
        setLoginEmail(TEST_USER_EMAIL);
        setLoginPassword(TEST_USER_PASSWORD);
    }
    return (
        <div >
            <Header />
            <div className="absolute">
                <img className="h-screen w-screen object-cover"
                    src={BG_IMAGE}
                    alt="BG Image" />
            </div>

            <form onSubmit={(e) => e.preventDefault()}
                className="absolute p-12 bg-black text-white w-full md:w-3/12 my-36 md:mx-auto right-0 left-0  rounded-lg opacity-90">
                <h1 className="text-3xl py-2">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignIn && <input ref={name}
                    className="my-3 p-2 w-full rounded-sm bg-gray-900"
                    type="text"
                    placeholder="Name" />}

                <input
                    ref={email}
                    className="my-3 p-2 w-full rounded-sm bg-gray-900"
                    type="email"
                    placeholder="Email or phone number"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)} />

                <input
                    ref={password}
                    className="my-3 p-2 w-full rounded-sm bg-gray-900"
                    type="password"
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)} />

                <button className="bg-red-600 p-2 w-full my-6 rounded-sm" onClick={handleButtonClick}>
                    {isSignIn ? "Login" : "Sign Up"}
                </button>

                <p className="text-sm font-bold text-red-600">{errorMessage}</p>

                <p className="py-1 text-sm cursor-pointer" onClick={handleSignInToggle}>
                    {isSignIn ? "New to Netflix? Sign Up Now!" :
                        "Already registered? Sign In Now."}
                </p>

                <p className="py-1 text-sm">OR</p>

                <button className="bg-red-600 p-2 w-full my-4 rounded-sm" onClick={handleTestUserButtonClick}>
                    Test User Credentials
                </button>

            </form>
        </div >
    )
};

export default Login;