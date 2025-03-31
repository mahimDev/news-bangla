
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
            <div>

            </div>
        </div>
    );
};

export default NavBer;