
const NavBer = () => {
    const date = new Date().toDateString()
    console.log(date)
    return (
        <div className="">
            {/* social and date */}
            <div className="flex justify-between items-center py-3 w-10/12 mx-auto">
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
                <h1 className="text-4xl font-bold bg-blue-500 text-center text-white py-5 ">News Bangla</h1>
            </div>
            {/* menu bar */}
            <div className="flex w-10/12 mx-auto">
                {/* khobor */}
                <div className="w-fit group ">
                    <h1 className="group-hover:bg-gray-300 font-semibold py-1 px-4">Khobor</h1>
                    <div className=" hidden group-hover:block absolute bg-blue-300 ">
                        <div>
                            <button className="hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start">Jatio</button>
                        </div>
                        <div>
                            <button className="hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start">Rajniti</button>
                        </div>
                        <div>
                            <button className="hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start">International</button>
                        </div>
                        <div>
                            <button className="hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start">Saradesh</button>
                        </div>
                        <div>
                            <button className="hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start">Oporadh</button>
                        </div>

                    </div>
                </div>
                {/* Khela */}
                <div className="w-fit group ">
                    <h1 className="group-hover:bg-gray-300 font-semibold py-1 px-4">Khela</h1>
                    <div className=" hidden group-hover:block absolute bg-blue-300 ">
                        <div>
                            <button className="hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start">Jatio</button>
                        </div>
                        <div>
                            <button className="hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start">Rajniti</button>
                        </div>
                        <div>
                            <button className="hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start">International</button>
                        </div>
                        <div>
                            <button className="hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start">Saradesh</button>
                        </div>
                        <div>
                            <button className="hover:bg-blue-600 hover:text-white  py-1 px-4 w-36 text-start">Oporadh</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBer;