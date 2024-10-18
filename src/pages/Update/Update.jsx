import React from "react";
import { json, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const updateCoffee = useLoaderData();
    const navigate = useNavigate();

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const coffeeName = form.coffeeName.value;
        const coffeeQuantity = form.coffeeQuantity.value;
        const coffeeSupplier = form.coffeeSupplier.value;
        const coffeeTest = form.coffeeTest.value;
        const coffeeCategory = form.coffeeCategory.value;
        const coffeeDetails = form.coffeeDetails.value;
        const photoUrl = form.photoUrl.value;

        const coffeeInfo = {
            coffeeName,
            coffeeQuantity,
            coffeeSupplier,
            coffeeTest,
            coffeeCategory,
            coffeeDetails,
            photoUrl,
        };

        Swal.fire({
            title: "Are you sure?",
            text: `${coffeeName} update this item`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(
                    `https://coffee-sotre-server.vercel.app/coffees/${updateCoffee._id}`,
                    {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(coffeeInfo),
                    }
                )
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your data has been updated.",
                                icon: "success",
                            });
                            navigate("/");
                        }
                    });
            }
        });
    };

    return (
        <div className="bg-[#F4F3F0] p-10 md:p-24">
            <h2 className="text-4xl text-center mb-5 font-extrabold">
                Update a Coffee
            </h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="coffeeName"
                                defaultValue={updateCoffee.coffeeName}
                                placeholder="Enter coffee name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">
                                Available Quantity
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="coffeeQuantity"
                                defaultValue={updateCoffee.coffeeQuantity}
                                placeholder="Enter Quantity"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                {/* form supplier row */}
                <div className="md:flex mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="coffeeSupplier"
                                defaultValue={updateCoffee.coffeeSupplier}
                                placeholder="Enter coffee supplier"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Test</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="coffeeTest"
                                defaultValue={updateCoffee.coffeeTest}
                                placeholder="Enter coffee test"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                {/* form category and details row */}
                <div className="md:flex mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                defaultValue={updateCoffee.coffeeCategory}
                                name="coffeeCategory"
                                placeholder="Enter coffee Category"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="coffeeDetails"
                                defaultValue={updateCoffee.coffeeDetails}
                                placeholder="Enter coffee details"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                {/* form photo url row */}
                <div className="mb-3">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="photoUrl"
                                defaultValue={updateCoffee.photoUrl}
                                placeholder="Enter photo url"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <input
                    type="submit"
                    value="Update Coffee"
                    className="btn btn-block bg-[#D2B48C]"
                />
            </form>
        </div>
    );
};

export default Update;
