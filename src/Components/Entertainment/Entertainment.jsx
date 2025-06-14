import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Entertainment = () => {
    const [latestNews, setLatestNews] = useState({})
    const [latest2nd3rdNews, setLatest2nd3rdNews] = useState([])
    const axiosnPublic = useAxiosPublic()
    // latest first news
    useEffect(() => {
        const fatchData = async () => {
            const { data } = await axiosnPublic.get("/latestentertainmentNews")
            setLatestNews(data[0])
        }
        fatchData()
    }, [axiosnPublic])
    // latest 2nd & 3rd news
    useEffect(() => {
        const fatchData = async () => {
            const { data } = await axiosnPublic.get("/latest2nd3rdentertainmentNews")
            setLatest2nd3rdNews(data)
        }
        fatchData()
    }, [axiosnPublic])
    return (
        <div>
            <h1 className="text-5xl font-medium my-10 flex items-center">
                <div className="backgroundGradient w-2 h-14  mr-2"></div>    বিনোদন
            </h1>
            <div className="lg:flex gap-20">
                {/* <div className="max-w-[600px] ">
                    <img className="max-h-[300px] w-full object-cover" src={latestNews?.imageUrl} alt="" />
                    <Link to={`news/${latestNews?._id}`} className="hover:text-blue-600 ">
                        <h1 className="text-4xl p-3">
                            {latestNews?.title}
                        </h1>
                    </Link>
                    <p className="p-3">
                        {latestNews?.content?.slice(0, 300)}...
                    </p>
                </div> */}
                <div className="max-w-[600px]">
                    <Helmet>
                        <meta property="og:title" content={latestNews?.title} />
                        <meta property="og:image" content={latestNews?.imageUrl} />
                    </Helmet>

                    <img className="max-h-[300px] w-full object-cover" src={latestNews?.imageUrl} alt={latestNews?.title} />
                    <Link to={`news/${latestNews?._id}`} className="hover:text-blue-600">
                        <h1 className="text-4xl p-3">{latestNews?.title}</h1>
                    </Link>
                    <p className="p-3">{latestNews?.content?.slice(0, 300)}...</p>
                </div>
                <div className="space-y-2">
                    {latest2nd3rdNews?.map((item) =>
                        <div key={item?._id} className="bg-blue-50 md:flex p-2 rounded">
                            <img className="md:max-w-[200px] max-h-[150px] w-full object-cover rounded" src={item?.imageUrl} alt="" />

                            <Link to={`news/${item?._id}`} className="hover:text-blue-600 ">
                                <h1 className="text-2xl p-3">
                                    {item?.title}
                                </h1>
                            </Link>

                        </div>
                    )


                    }



                </div>
            </div>
            {/* <div className="flex justify-center my-10">
    <button className="bg-blue-500 text-xl px-4 py-1 font-medium text-white rounded ">More </button>
</div> */}
        </div>
    );
};

export default Entertainment;