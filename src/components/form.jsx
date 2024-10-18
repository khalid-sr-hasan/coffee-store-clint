import React, { useState } from "react";

const Form = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        gender: "Female",
        status: "Active",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Data:", user);
        alert("Form submitted successfully!");
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
                <div className="bg-teal-500 text-white py-3 px-5 rounded-t-lg">
                    <h2 className="text-center text-lg font-semibold">
                        User Management System
                    </h2>
                </div>

                <div className="px-8 py-6">
                    <a
                        href="#"
                        className="text-purple-500 font-semibold text-sm"
                    >
                        &larr; All Users
                    </a>

                    <h3 className="text-center text-xl font-semibold mt-4 mb-6">
                        New User
                    </h3>
                    <p className="text-center text-gray-500 mb-6">
                        Use the below form to create a new account
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                                placeholder="Jaya Dakhale"
                                className="w-full p-2 rounded-md border border-gray-300"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                placeholder="jaya@gmail.com"
                                className="w-full p-2 rounded-md border border-gray-300"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Gender
                            </label>
                            <div className="flex space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={user.gender === "Male"}
                                        onChange={handleChange}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">Male</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={user.gender === "Female"}
                                        onChange={handleChange}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">Female</span>
                                </label>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Status
                            </label>
                            <div className="flex space-x-4">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="Active"
                                        checked={user.status === "Active"}
                                        onChange={handleChange}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">Active</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="Inactive"
                                        checked={user.status === "Inactive"}
                                        onChange={handleChange}
                                        className="form-radio"
                                    />
                                    <span className="ml-2">Inactive</span>
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-md"
                        >
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
