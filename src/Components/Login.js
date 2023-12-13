import Header from "./Header";

const Login = () => {
    return (
        <div>
            <Header />
            <div  className="absolute">
                <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
                alt="BG Image" />
            </div>

            <form className="absolute p-12 bg-black text-white w-3/12 my-36 mx-auto right-0 left-0 py-24 rounded-lg opacity-80">
                <h1 className="text-3xl py-2">Sign In</h1>
                <input
                className="my-4 p-2 w-full rounded-sm bg-gray-700"
                type="email"
                placeholder="Enter Email Address"/>

                <input 
                className="my-4 p-2 w-full rounded-sm bg-gray-700"
                type="password"
                placeholder="Password"/>

                <button className="bg-red-500 p-3 w-full my-6 rounded-sm">
                    Sign In
                </button>
            </form>

        </div>
    )
};

export default Login;