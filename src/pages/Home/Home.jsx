import React from "react";
import Swal from "sweetalert2";
import { Link, Outlet, useLoaderData } from "react-router-dom";

import { useState } from "react";
import CoffeeCard from "../../components/CoffeeCard";

const Home = () => {
    const coffeesData = useLoaderData();
    const [coffees, setCoffees] = useState(coffeesData);

    return (
        <div className="container mx-auto px-2 md:px-0">
            <h1 className="text-center font-extrabold text-4xl mt-10">
                All Coffee List : {coffees.length}
            </h1>
            <div className="mt-5">
                <Link to={"/addCoffee"}>
                    <button
                        className="btn
                    "
                    >
                        Add new Coffee
                    </button>
                </Link>
            </div>
            <div className="my-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
                {coffees.map((coffee) => (
                    <CoffeeCard
                        key={coffee._id}
                        // handleDelete={handleDelete}
                        coffees={coffees}
                        setCoffees={setCoffees}
                        coffee={coffee}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
