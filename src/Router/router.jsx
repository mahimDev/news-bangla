import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddNews from "../Pages/AddNews/AddNews";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "addNews",
                element: <AddNews />
            },
            {
                path: "news/:id",
                element: <NewsDetails />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_SEVER_API_URL}/newsDetails/${params?.id}`)
            },
            {
                path: "category/:category",
                element: <CategoryNews />,
                // loader: ({ params }) =>
                //     fetch(`${import.meta.env.VITE_SEVER_API_URL}news/${params?.id}`)
            },
        ]

    }
])

export default router;