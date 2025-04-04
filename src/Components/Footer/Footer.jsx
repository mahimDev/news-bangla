
const Footer = () => {
    const date = new Date().getFullYear()
    console.log(date)
    return (
        <div className="bg-blue-500 text-white">
            <div className="flex justify-center items-start  py-10 ">
                <div className="flex-1 text-center">
                    <h1 className="text-2xl font-medium">News Bangla</h1>
                </div>
                <div className="flex-1">
                    <p>
                        News Bangla is a multimedia platform for news, views and entertainment from Bangladesh. We are committed to bringing a futuristic approach to journalism through writing, making and display. News Bangla delivers the latest breaking news and top stories across politics, business, entertainment, sport, innovation, travel, food, life and others.
                    </p>
                </div>
                <div className="flex-1">
                    <h1 className="text-center text-xl font-medium mb-2">Social Links</h1>
                    <div className="flex gap-1 justify-center ">
                        <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" />
                        <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" alt="" />
                        <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="" />
                        <img className="w-8 h-8" src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000" alt="" />
                    </div>
                </div>
            </div>
            <hr />
            <div className="text-center py-2 text-gray-300">
                <p>	&copy; {date} News Bangla Al rights reserved </p>
            </div>
        </div>
    );
};

export default Footer;