import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Update from "./pages/Update/Update.jsx";
import AddCoffee from "./pages/AddCoffee/AddCoffee.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { Users } from "./pages/Users/Users.jsx";
import Home from "./pages/Home/Home.jsx";
import Form from "./components/form.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            {
                path: "/",
                element: <Home />,
                loader: () =>
                    fetch("https://coffee-sotre-server.vercel.app/coffees"),
            },
            {
                path: "/update/:id",
                element: <Update />,
                loader: ({ params }) =>
                    fetch(
                        `https://coffee-sotre-server.vercel.app/coffees/${params.id}`
                    ),
            },
            {
                path: "/addCoffee",
                element: <AddCoffee />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/form",
                element: <Form />,
            },
            {
                path: "/users",
                element: <Users />,
                loader: () =>
                    fetch("https://coffee-sotre-server.vercel.app/users"),
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </AuthProvider>
    </StrictMode>
);
