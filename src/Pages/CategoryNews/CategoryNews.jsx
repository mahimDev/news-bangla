import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const CategoryNews = () => {
    const [news, setNews] = useState([])
    const { pathname } = useLocation()
    const category = pathname.split("/")[2]
    const axiosnPublic = useAxiosPublic()
    useEffect(() => {
        const fatchFData = async () => {
            const { data } = await axiosnPublic.get(`/news/${category}`)
            setNews(data)
        }
        fatchFData()
    }, [axiosnPublic, category])
    return (
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 min-h-[90vh] mt-10">
            {news?.map((items) =>
                < div key={items?._id}>

                    <img className="  " src={items?.imageUrl} alt="" />

                    <Link to={`/news/${items?._id}`} className="hover:text-blue-500">
                        <h1 className="text-2xl my-5">{items?.title}</h1>
                    </Link>
                    <p className="p-3">
                        {items?.content?.slice(0, 300)}...
                    </p>
                </div>
            )
            }
        </div >
    );
};

export default CategoryNews;