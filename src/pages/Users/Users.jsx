import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

export const Users = () => {
    const loadUsers = useLoaderData();
    console.log(loadUsers);

    const [users, setUsers] = useState(loadUsers);

    const handleDelete = (id) => {
        console.log(id);

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
                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                            console.log(data);
                            const remaining = users.filter(
                                (user) => user._id !== id
                            );
                            setUsers(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className="container mx-auto  mt-24">
            Users: {users.length}
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Create Time</th>
                            <th>Last Log Time</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {users.map((user, idx) => (
                            <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{}</td>
                                <td>{user.email}</td>
                                <th>{user.createdAt}</th>
                                <th>
                                    {user?.lastLogAt ? user.lastLogAt : "N/A"}
                                </th>
                                <td className="flex flex-col gap-2 md:flex-row">
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="btn btn-error text-white"
                                    >
                                        Delete
                                    </button>
                                    <button className="btn btn-primary">
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
