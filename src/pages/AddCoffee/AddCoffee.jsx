import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
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

        fetch("http://localhost:5000/coffees", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(coffeeInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Data added successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                    form.reset();
                    console.log(data);
                }
            });
    };

    return (
        // <div className="container mx-auto px-3">
        //     <h1 className="text-center">AddCoffee</h1>
        //     <div className="border w-full mt-36  md:w-5/6 mx-auto p-4 rounded-lg shadow-lg">
        //         <form className="space-y-5">
        //             <div className="grid grid-col-1 md:grid-cols-2 gap-3">
        //                 <div className="">
        //                     <label htmlFor="lastname" className="text-sm">
        //                         Last name
        //                     </label>
        //                     <input
        //                         id="lastname"
        //                         type="text"
        //                         placeholder="Last name"
        //                         className="w-full p-2 rounded-md outline-none border border-[#D2B48C]"
        //                     />
        //                 </div>
        //                 <div className="">
        //                     <label htmlFor="lastname" className="text-sm">
        //                         Last name
        //                     </label>
        //                     <input
        //                         id="lastname"
        //                         type="text"
        //                         placeholder="Last name"
        //                         className="w-full p-2 rounded-md outline-none border  border-[#D2B48C]"
        //                     />
        //                 </div>
        //                 <div className="">
        //                     <label htmlFor="lastname" className="text-sm">
        //                         Last name
        //                     </label>
        //                     <input
        //                         id="lastname"
        //                         type="text"
        //                         placeholder="Last name"
        //                         className="w-full p-2 rounded-md outline-none border  border-[#D2B48C]"
        //                     />
        //                 </div>
        //                 <div className="">
        //                     <label htmlFor="lastname" className="text-sm">
        //                         Last name
        //                     </label>
        //                     <input
        //                         id="lastname"
        //                         type="text"
        //                         placeholder="Last name"
        //                         className="w-full p-2 rounded-md outline-none border  border-[#D2B48C]"
        //                     />
        //                 </div>
        //                 <div className="">
        //                     <label htmlFor="lastname" className="text-sm">
        //                         Last name
        //                     </label>
        //                     <input
        //                         id="lastname"
        //                         type="text"
        //                         placeholder="Last name"
        //                         className="w-full p-2 rounded-md outline-none border  border-[#D2B48C]"
        //                     />
        //                 </div>
        //                 <div className="">
        //                     <label htmlFor="lastname" className="text-sm">
        //                         Last name
        //                     </label>
        //                     <input
        //                         id="lastname"
        //                         type="text"
        //                         placeholder="Last name"
        //                         className="w-full p-2 rounded-md outline-none border  border-[#D2B48C]"
        //                     />
        //                 </div>
        //             </div>

        //             <div className="">
        //                 <input
        //                     id="lastname"
        //                     type="submit"
        //                     value="Submit"
        //                     className="w-full py-4 rounded-md cursor-pointer outline-none border bg-[#D2B48C] border-[#D2B48C]"
        //                 />
        //             </div>
        //         </form>
        //     </div>
        // </div>

        <div className="bg-[#F4F3F0] p-10 md:p-24">
            <h2 className="text-3xl font-extrabold">Add a coffee</h2>
            <form onSubmit={handleAddCoffee}>
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
                                placeholder="Enter photo url"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <input
                    type="submit"
                    value="Add Coffee"
                    className="btn btn-block bg-[#D2B48C]"
                />
            </form>
        </div>
    );
};

export default AddCoffee;
