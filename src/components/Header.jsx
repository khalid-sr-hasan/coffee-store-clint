import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error));
    };

    return (
        <div className=" container shadow-xl rounded-lg my-6 border mx-auto navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/users"}>Users</Link>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold  text-[#775843]">
                    Coffee Store
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/users"}>Users</Link>
                    </li>
                    <li>
                        <a>Item 3</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ? (
                    <button onClick={handleLogout} className="btn">
                        Logout
                    </button>
                ) : (
                    <Link to={"/login"} className="btn">
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
