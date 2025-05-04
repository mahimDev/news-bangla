import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddNews from "../Pages/Dashboard/AddNews/AddNews";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import ShareRedirect from "../Pages/ShareRedirect/ShareRedirect";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import AdminRoute from "../SecureRoute/AdminRoute";
import AllNews from "../Pages/Dashboard/AllNews/AllNews";

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
                path: "news/:id",
                element: <NewsDetails />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_SEVER_API_URL}newsDetails/${params?.id}`)
            },
            // {
            //     path: "share/:id",
            //     element: <ShareRedirect />,

            // },
            {
                path: "category/:category",
                element: <CategoryNews />,

            },
        ]

    },
    {
        path: "dashboard",
        element:
            <AdminRoute>
                <Dashboard />
            </AdminRoute>,
        children: [
            {
                path: "add-news",
                element: <AddNews />
            },
            {
                path: "all-news",
                element: <AllNews />
            },
        ]
    }
])

export default router;