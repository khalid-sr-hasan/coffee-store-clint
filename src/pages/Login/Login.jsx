import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then((result) => {
                console.log(result.user);
                const user = {
                    email,
                    lastLogAt: result.user.metadata?.lastSignInTime,
                };

                fetch("https://coffee-sotre-server.vercel.app/users", {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(user),
                })
                    .then((res) => res.json())
                    .then((data) => console.log(data));
            })
            .then((err) => console.log(err));
    };

    return (
        <div className="container mx-auto px-3">
            <div className="border w-full mt-36 md:w-3/6 lg:w-2/6 mx-auto px-7 py-10 rounded-xl shadow-lg">
                <h1 className="text-center text-3xl font-bold">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                        <div className="">
                            <label htmlFor="yourEmail" className="text-sm">
                                Your Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Last name"
                                className="w-full p-2 rounded-md outline-none border border-[#D2B48C]"
                            />
                        </div>
                        <div className="">
                            <label htmlFor="password" className="text-sm">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="type your password"
                                className="w-full p-2 rounded-md outline-none border border-[#D2B48C]"
                            />
                        </div>

                        <div className="pt-4">
                            <input
                                id="name"
                                type="submit"
                                value="Login"
                                className="w-full p-2 rounded-md outline-none border cursor-pointer border-[#D2B48C]"
                            />
                        </div>
                        <p className="text-center pt-4">
                            Don't have account please{" "}
                            <Link
                                to={"/register"}
                                className="text-[#D2B48C] font-semibold"
                            >
                                Register
                            </Link>{" "}
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
