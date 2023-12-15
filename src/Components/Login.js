import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router";

const Login = () => {

    const navigate = useNavigate();
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null);
    const email = useRef();
    const password = useRef();
    const name = useRef();

    const handleSignInToggle = () => {
        setIsSignIn(!isSignIn);
    }

    const handleButtonClick = () => {

        let message = "";
        //ref will return the reference of the text under current.
         {!isSignIn ? message = validateData(email.current.value , password.current.value, name.current.value) : 
                        validateData(email.current.value , password.current.value, null)};

        setErrorMessage(message);
        if(message) return;

        if(!isSignIn){
            //sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                
                console.log(user);
                navigate("/browse"); //If signUp is success navigate to browse
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
                console.log(user);
                navigate("/browse") //If signIn is success navigate to browse
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + ":" + errorMessage);
            });
            }

    }

    return (
        <div>
            <Header />
            <div  className="absolute">
                <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
                alt="BG Image" />
            </div>

            <form onSubmit={(e) => e.preventDefault()} 
                className="absolute p-12 bg-black text-white w-3/12 my-36 mx-auto right-0 left-0  rounded-lg opacity-85">
                <h1 className="text-3xl py-2">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>

                {!isSignIn && <input ref={name}
                className="my-3 p-2 w-full rounded-sm bg-gray-900"
                type="text"
                placeholder="Name"/>}

                <input
                ref={email}
                className="my-3 p-2 w-full rounded-sm bg-gray-900"
                type="email"
                placeholder="Email or phone number"/>

                <input 
                ref={password}
                className="my-3 p-2 w-full rounded-sm bg-gray-900"
                type="password"
                placeholder="Password"/>

                <button className="bg-red-600 p-2 w-full my-6 rounded-sm" onClick={handleButtonClick}>
                    {isSignIn ? "Login" : "Sign Up"}
                </button>

                <p className="text-sm font-bold text-red-600">{errorMessage}</p>

                <p className="py-2 text-sm cursor-pointer" onClick={handleSignInToggle}>
                    {isSignIn ? "New to Netflix? Sign Up Now!" : 
                                "Already registered? Sign In Now."}
                </p>
                
            </form>

        </div>
    )
};

export default Login;