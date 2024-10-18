import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { coffeeName, photoUrl, _id, coffeeSupplier, coffeeDetails } = coffee;

    console.log(coffees);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your data has been deleted.",
                                icon: "success",
                            });
                        }
                        const remaining = coffees.filter(
                            (cof) => cof._id !== id
                        );
                        setCoffees(remaining);
                    });
            }
        });

        console.log(id);
    };

    return (
        <div className="card card-side p-5 items-center gap-10 bg-base-100 shadow-xl border">
            <img className="w-48 rounded-xl" src={photoUrl} alt="Movie" />

            <div className="flex justify-between items-center w-full">
                <div className="space-y-4 ">
                    <h2 className="card-title">Name: {coffeeName}</h2>
                    <p>
                        <span className="font-bold">Supplier:</span>{" "}
                        {coffeeSupplier}
                    </p>
                    <p>
                        <span className="font-bold">Details:</span>{" "}
                        {coffeeDetails}
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <button className="btn btn-primary">View</button>
                    <Link to={`/update/${_id}`}>
                        <button className="btn btn-primary">Update</button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-error text-white"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
