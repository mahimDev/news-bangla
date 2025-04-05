import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const NavBer = () => {
    const date = new Date().toDateString()
    const { user, userLogout } = useAuth()

    const handleLogoutBtn = () => {
        userLogout()
            .then(() => {
                console.log("logout completed")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const navLink = <>
        <NavLink to={'/'} className={({ isActive }) => `hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start ${isActive ? "bg-blue-600 text-white" : ""} `}>
            সর্বশেষ
        </NavLink>
        <NavLink to={'/rajniti'} className={({ isActive }) => `hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start ${isActive ? "bg-blue-600" : ""} `}>

            রাজনীতি
        </NavLink>
        <NavLink to={'/rajniti'} className={({ isActive }) => `hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start ${isActive ? "bg-blue-600" : ""} `}>

            বাংলাদেশ
        </NavLink>
        <NavLink to={'/rajniti'} className={({ isActive }) => `hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start ${isActive ? "bg-blue-600" : ""} `}>

            অপরাধ
        </NavLink>
    </>
    return (
        <div className="">
            {/* social and date */}
            <div className=" flex justify-between items-center py-3 w-10/12 mx-auto">
                <h1 className="font-medium text-xl">{date}</h1>
                <div className="flex gap-1">
                    <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" />
                    <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" alt="" />
                    <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="" />
                    <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000" alt="" />
                </div>
            </div>
            {/* logo */}
            <div>
                <Link to="/">
                    <h1 className="text-4xl font-bold bg-blue-500 text-center text-white py-8 mb-2 ">News Bangla</h1>
                </Link>
            </div>
            {/* menu bar */}
            <div className="md:block hidden ">
                <div className="  flex justify-between w-10/12 mx-auto items-center">
                    <div className=" flex    py-4 px-10 ">
                        {navLink}
                    </div>
                    <div className="flex">
                        <div className="flex ">
                            <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000" alt="" />
                            <h1 className="text-lg ml-1">Search</h1>
                        </div>
                        <div className="border mx-3 border-gray-500"></div>
                        {user ?
                            <button type="button" onClick={handleLogoutBtn} className="flex cursor-pointer ">
                                <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=vGj0AluRnTSa&format=png&color=000000" alt="" />
                                <h1 className="text-lg ml-1">Logout</h1>
                            </button>
                            :
                            <Link to={"login"}>
                                <div className="flex ">
                                    <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=43942&format=png&color=000000" alt="" />
                                    <h1 className="text-lg ml-1">Login</h1>
                                </div>
                            </Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBer;

////////////////

