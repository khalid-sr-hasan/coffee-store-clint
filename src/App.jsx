import "./App.css";
import { Outlet, useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

import Header from "./components/Header";

function App() {
    // const handleDelete = (id) => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!",
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             fetch(`https://coffee-sotre-server.vercel.app/coffees/${id}`, {
    //                 method: "DELETE",
    //             })
    //                 .then((res) => res.json())
    //                 .then((data) => {
    //                     if (data.deletedCount > 0) {
    //                         Swal.fire({
    //                             title: "Deleted!",
    //                             text: "Your file has been deleted.",
    //                             icon: "success",
    //                         });
    //                     }
    //                     const remaining = coffees.filter(
    //                         (cof) => cof._id !== id
    //                     );
    //                     setCoffees(remaining);
    //                     console.log(data);
    //                 });
    //         }
    //     });

    //     console.log(id);
    // };

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
