
const BreakingNews = ({ title }) => {
    return (
        <div>
            {
                title &&
                <h1 className="text-2xl font-semibold  bg-rose-600 text-white w-fit mx-auto mb-5 p-5  ">{title}</h1>
            }
            <div className="flex justify-center gap-10">
                <div className="text-center ">
                    <img className="w-44 h-44 object-cover rounded-t" src="https://i.ibb.co.com/VXFFJdH/ying-ge-Yo1c-WJVKFY-unsplash.jpg" alt="" />
                    <h1 className="w-44  ">এখনো সংস্কার হয়নি খোলপেটুয়ার বেড়িবাঁধ, পানিবন্দী ১৫ হাজার মানুষ</h1>
                </div>
                <div className="text-center">
                    <img className="w-44 h-44 object-cover" src="https://i.ibb.co.com/VXFFJdH/ying-ge-Yo1c-WJVKFY-unsplash.jpg" alt="" />
                    <h1 className="w-44">এখনো সংস্কার হয়নি খোলপেটুয়ার বেড়িবাঁধ, পানিবন্দী ১৫ হাজার মানুষ</h1>
                </div>
                <div className="text-center">
                    <img className="w-44 h-44 object-cover" src="https://i.ibb.co.com/VXFFJdH/ying-ge-Yo1c-WJVKFY-unsplash.jpg" alt="" />
                    <h1 className="w-44">এখনো সংস্কার হয়নি খোলপেটুয়ার বেড়িবাঁধ, পানিবন্দী ১৫ হাজার মানুষ</h1>
                </div>
                <div className="text-center">
                    <img className="w-44 h-44 object-cover" src="https://i.ibb.co.com/VXFFJdH/ying-ge-Yo1c-WJVKFY-unsplash.jpg" alt="" />
                    <h1 className="w-44">এখনো সংস্কার হয়নি খোলপেটুয়ার বেড়িবাঁধ, পানিবন্দী ১৫ হাজার মানুষ</h1>
                </div>
                <div className="text-center">
                    <img className="w-44 h-44 object-cover" src="https://i.ibb.co.com/VXFFJdH/ying-ge-Yo1c-WJVKFY-unsplash.jpg" alt="" />
                    <h1 className="w-44">এখনো সংস্কার হয়নি খোলপেটুয়ার বেড়িবাঁধ, পানিবন্দী ১৫ হাজার মানুষ</h1>
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;