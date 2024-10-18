import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { registerUser } = useContext(AuthContext);
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log(name, email, password, confirmPassword);

        if (confirmPassword !== password) {
            setConfirmPasswordError("password no't match");
        } else {
            setConfirmPasswordError("");
        }

        if (password === confirmPassword) {
            registerUser(email, password)
                .then((result) => {
                    console.log(result.user);
                    const createdAt = result.user?.metadata?.creationTime;
                    const user = { email, createdAt: createdAt };
                    fetch("http://localhost:5000/users", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(user),
                    })
                        .then((res) => res.json())
                        .then((data) => console.log(data));

                    form.reset();
                })
                .catch((err) => console.log(err));
        }
    };
    return (
        <div className="container mx-auto px-3">
            <div className="border w-full mt-36 md:w-3/6 lg:w-2/6 mx-auto px-7 py-10 rounded-xl shadow-lg">
                <h1 className="text-center text-3xl font-bold">Register</h1>
                <form onSubmit={handleRegister}>
                    <div className="space-y-4">
                        <div className="">
                            <label htmlFor="yourName" className="text-sm">
                                Your Name
                            </label>
                            <input
                                id="yourName"
                                type="text"
                                name="name"
                                placeholder="name"
                                className="w-full p-2 rounded-md outline-none border border-[#D2B48C]"
                            />
                        </div>
                        <div className="">
                            <label htmlFor="yourEmail" className="text-sm">
                                Your Email
                            </label>
                            <input
                                id="yourEmail"
                                type="text"
                                name="email"
                                placeholder="Last name"
                                className="w-full p-2 rounded-md outline-none border border-[#D2B48C]"
                            />
                        </div>
                        <div className="">
                            <label className="text-sm">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="type your password"
                                className="w-full p-2 rounded-md outline-none border border-[#D2B48C]"
                            />
                        </div>

                        <div className="">
                            <label className="text-sm">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="retype your password"
                                className="w-full p-2 rounded-md outline-none border border-[#D2B48C]"
                            />
                            {confirmPasswordError && (
                                <p>{confirmPasswordError}</p>
                            )}
                        </div>

                        <div className="pt-4">
                            <input
                                type="submit"
                                value="Register"
                                className="w-full cursor-pointer p-2 rounded-md outline-none border border-[#D2B48C]"
                            />
                        </div>
                        <p className="text-center pt-4">
                            Don't have account please{" "}
                            <Link className="text-[#D2B48C] font-semibold">
                                Login
                            </Link>{" "}
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
