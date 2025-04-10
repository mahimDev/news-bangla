import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

const NavBer = () => {
    const [isOpen, setIsOpen] = useState(false)
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
        <li>
            <NavLink to={'/'} className={({ isActive }) => `hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start ${isActive ? "md:bg-blue-600 text-white" : ""} `}>
                সর্বশেষ
            </NavLink>
        </li>
        <li>
            <NavLink to={'category/politics'} className={({ isActive }) => `hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start ${isActive ? "md:bg-blue-600 text-white" : ""} `}>

                রাজনীতি
            </NavLink>
        </li>
        <li>
            <NavLink to={'category/bangladesh'} className={({ isActive }) => `hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start ${isActive ? "md:bg-blue-600 text-white" : ""} `}>

                বাংলাদেশ
            </NavLink>
        </li>
        <li>
            <NavLink to={'category/international'} className={({ isActive }) => `hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start ${isActive ? "md:bg-blue-600 text-white" : ""} `}>

                আন্তর্জাতিক
            </NavLink>
        </li>
        <li>
            <NavLink to={'category/business'} className={({ isActive }) => `hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start ${isActive ? "md:bg-blue-600 text-white" : ""} `}>

                ব্যবসা-বাণিজ্য
            </NavLink>
        </li>
        <li>
            <NavLink to={'category/technology'} className={({ isActive }) => `hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start ${isActive ? "md:bg-blue-600 text-white" : ""} `}>

                প্রযুক্তি
            </NavLink>
        </li>
        <li>
            <NavLink to={'category/sports'} className={({ isActive }) => `hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start ${isActive ? "md:bg-blue-600 text-white" : ""} `}>

                খেলা
            </NavLink>
        </li>
        <li>
            <NavLink to={'category/entertainment'} className={({ isActive }) => `hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start ${isActive ? "md:bg-blue-600 text-white" : ""} `}>

                বিনোদন
            </NavLink>
        </li>
        <li>
            <NavLink to={'category/weather'} className={({ isActive }) => `hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start ${isActive ? "md:bg-blue-600 text-white" : ""} `}>

                আবহাওয়া
            </NavLink>
        </li>
    </>
    return (
        <div className="">

            <div className=" flex justify-between items-center py-3 w-10/12 mx-auto">
                {/* social and date */}
                <h1 className="font-medium text-xl">{date}</h1>
                <div className="hidden md:block">
                    <div className=" flex gap-1">
                        <Link to="https://www.facebook.com/nekrenews">
                            <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" />
                        </Link>

                        <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" alt="" />
                        <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="" />
                        <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000" alt="" />
                    </div>
                </div>
                {/* menu for mobile */}
                <div className="md:hidden block">
                    {
                        isOpen ? <button onClick={() => setIsOpen(false)}>
                            <img className="w-9 transition duration-300 hover:rotate-12" src="https://img.icons8.com/?size=100&id=18496&format=png&color=000000" />
                        </button>
                            :
                            <button onClick={() => setIsOpen(true)}>
                                <img className="w-9" src="https://img.icons8.com/?size=100&id=eofQ1g5BaAx6&format=png&color=000000" />
                            </button>
                    }
                    {
                        isOpen && <ul className="absolute right-0 top-[66px] bg-green-700 p-2 rounded flex-col">
                            {navLink}
                        </ul>
                    }
                </div>
            </div>
            {/* logo */}
            <div>
                <Link to="/">
                    <div className=" font-bold bg-green-800 flex  justify-center text-white    ">
                        <img className="w-32 h-22 object-cover   " src="https://i.ibb.co.com/xK56svt9/Whats-App-Image-2025-04-08-at-01-49-24-5b71c74e.jpg" />
                    </div>
                </Link>
            </div>
            {/* menu bar */}
            <div className="md:block hidden ">
                <div className="  flex justify-between w-10/12 mx-auto items-center">
                    <ul className=" flex    py-4 px-10 ">
                        {navLink}
                    </ul>
                    <div className="flex">
                        <div className="flex ">
                            <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=59878&format=png&color=000000" alt="" />
                            <h1 className="text-lg ml-1">Search</h1>
                        </div>
                        <div className=" border mx-3 border-gray-500"></div>
                        <div>
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
        </div>
    );
};

export default NavBer;

////////////////

