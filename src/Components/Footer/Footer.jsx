import { Link } from "react-router-dom";

const Footer = () => {
    const date = new Date().getFullYear()

    return (
        <div className="bg-blue-500 text-white">
            <div className="lg:flex justify-center items-start  p-10 space-y-5">
                <div className="flex-1 text-center">
                    <h1 className="text-2xl font-medium">Nekre News</h1>
                </div>
                <div className="flex-1">
                    <p>
                        Nekre News is a multimedia platform for news, views and entertainment from Bangladesh. We are committed to bringing a futuristic approach to journalism through writing, making and display. Nekre News delivers the latest breaking news and top stories across politics, business, entertainment, sport, innovation, travel, food, life and others.
                    </p>
                </div>
                <div className="flex-1">
                    <h1 className="text-center text-xl font-medium mb-2">Social Links</h1>
                    <div className="flex gap-1 justify-center ">
                        <Link to={"https://www.facebook.com/nekrenews"}>
                            <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" />
                        </Link>

                        <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" alt="" />
                        <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="" />
                        <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000" alt="" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="text-center py-2 text-gray-300">
                <p>	&copy; {date} Nekre News Al rights reserved </p>
            </div>
        </div>
    );
};

export default Footer;