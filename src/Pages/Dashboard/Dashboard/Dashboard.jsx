import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Dashboard = () => {
    const { user } = useAuth()
    const menu = <>
        <li className="">
            <NavLink to={'add-news'}
                className={({ isActive }) =>
                    `block pl-5 py-1 w-full  ${isActive ? "bg-green-50 rounded " : " text-white"}
    `}>
                Add News
            </NavLink>
        </li>
        <li className="">
            <NavLink to={'all-news'}
                className={({ isActive }) =>
                    `block pl-5 py-1 w-full  ${isActive ? "bg-green-50 rounded " : " text-white"}
        `}>
                All News
            </NavLink>
        </li>

    </>
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-3 backgroundGradient min-h-screen">
                <h1 className=" text-2xl  text-white text-center py-4 border-b mb-5 "> Admin Panel</h1>

                <Link to="/">
                    <h1 className=" text-2xl bg-gradient-to-br from-[#1b6001] via-[#073207dd] to-[#000d03db] hover:from-[#2786049a] hover:via-[#016001ab] hover:scale-105 duration-300 transform-3d  text-white text-center py-2 w-1/2 mx-auto rounded">Go To Home</h1>
                </Link>
                <ul className="text-lg p-10  font-semibold  space-y-2 ">
                    {menu}
                </ul>
            </div>
            <div className="col-span-9 w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;