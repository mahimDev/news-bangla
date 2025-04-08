import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

// latestNews
const NewsCard = () => {
    const [latestNews, setLatestNews] = useState({})
    const [latest2nd3rdNews, setlatest2nd3rdNews] = useState([])
    const axiosnPublic = useAxiosPublic()
    // latest first news
    useEffect(() => {
        const fatchData = async () => {
            const { data } = await axiosnPublic.get("/latestNews")
            setLatestNews(data[0])
        }
        fatchData()
    }, [axiosnPublic])
    // latest 2nd & 3rd news
    useEffect(() => {
        const fatchData = async () => {
            const { data } = await axiosnPublic.get("/latest2nd3rdNews")
            setlatest2nd3rdNews(data)
        }
        fatchData()
    }, [axiosnPublic])
    return (
        <div>
            <div className="lg:flex justify-center gap-20">
                <div className="max-w-[800px] ">
                    <div className="overflow-hidden rounded">
                        <img className="h-[500px] w-full object-cover hover:scale-105 duration-500 transition ease-in-out" src={latestNews?.imageUrl} alt="" />
                    </div>

                    <Link to={`news/${latestNews?._id}`} className="hover:text-blue-600 ">
                        <h1 className="text-4xl p-3">
                            {latestNews?.title}
                        </h1>
                    </Link>
                    <p className="p-3">
                        {latestNews?.content?.slice(0, 300)}...
                    </p>
                </div>
                <div className="space-y-2">
                    {
                        latest2nd3rdNews?.map((newsInfo) => <div>

                            <div className="lg:w-[200px] border rounded p-1">
                                <div className="overflow-hidden rounded">
                                    <img className="h-[200px] w-full object-cover hover:scale-105 duration-500 transition ease-in-out" src={newsInfo?.imageUrl} alt="" />
                                </div>
                                <Link to={`news/${newsInfo?._id}`} className="hover:text-blue-600 ">
                                    <h1 className="text-2xl p-3">
                                        {newsInfo?.title}
                                    </h1>
                                </Link>
                            </div>

                        </div>)

                    }


                </div>
                {/* ad */}
                <div className="relative mt-10 lg:mt-0">
                    <img className="lg:max-w-[200px] h-full object-cover blur-sm" src="https://i.ibb.co.com/m9Jkh0v/view-University-of-Oxford-England-Oxfordshire.webp" alt="" />
                    <h1 className="text-2xl font-bold top-70 left-20 text-white absolute">Ads</h1>
                </div>
            </div>

        </div >
    );
};

export default NewsCard;