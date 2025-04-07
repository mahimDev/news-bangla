import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const Sports = () => {
    const [latestSportsNews, setLatestSportsNews] = useState({})
    const [latest2nd3rdSportsNews, setLatest2nd3rdSportsNews] = useState([])
    const axiosnPublic = useAxiosPublic()
    // latest first news
    useEffect(() => {
        const fatchData = async () => {
            const { data } = await axiosnPublic.get("/latestSportsNews")
            setLatestSportsNews(data[0])
        }
        fatchData()
    }, [axiosnPublic])
    // latest 2nd & 3rd news
    useEffect(() => {
        const fatchData = async () => {
            const { data } = await axiosnPublic.get("/latest2nd3rdSportsNews")
            setLatest2nd3rdSportsNews(data)
        }
        fatchData()
    }, [axiosnPublic])
    // console.log(latest2nd3rdSportsNews)
    return (
        <div>
            <h1 className="text-5xl font-medium my-10 flex items-center">
                <div className="bg-blue-500 w-2 h-14  mr-2"></div>   খেলা
            </h1>
            <div className="lg:flex gap-20">
                <div className="max-w-[600px] ">
                    <img className="max-h-[300px] w-full object-cover" src={latestSportsNews?.imageUrl} alt="" />
                    <Link to={`news/${latestSportsNews?._id}`} className="hover:text-blue-600 ">
                        <h1 className="text-4xl p-3">
                            {latestSportsNews?.title}
                        </h1>
                    </Link>
                    <p className="p-3">
                        {latestSportsNews?.content?.slice(0, 300)}...
                    </p>
                </div>
                <div className="space-y-2">
                    {latest2nd3rdSportsNews?.map((item) =>
                        <div key={item?._id} className="bg-blue-50 md:flex p-2 rounded">
                            <img className="max-w-[200px] max-h-[150px] w-full object-cover rounded" src={item?.imageUrl} alt="" />

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

export default Sports;