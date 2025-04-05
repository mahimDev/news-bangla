import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const BreakingNews = ({ title }) => {
    const axiosnPublic = useAxiosPublic()
    const { data: news = [] } = useQuery({
        queryKey: ["news"],
        queryFn: async () => {
            const { data } = await axiosnPublic.get("news")

            return data
        }
    })
    console.log(news)
    return (
        <div>
            {
                title &&
                <h1 className="text-2xl font-semibold  bg-rose-600 text-white w-fit mx-auto mb-5 p-5  ">{title}</h1>
            }
            <div className="flex justify-center gap-10">
                {news.map((newsItem) => <div key={newsItem._id} className="text-center ">
                    <img className="w-44 h-44 object-cover rounded-t" src={newsItem?.imageUrl} alt="" />
                    <Link to={`news/${newsItem?._id}`} className="hover:text-blue-600">
                        <h1 className="w-44  ">{newsItem?.title}</h1>
                    </Link>
                </div>)}

            </div>
        </div>
    );
};

export default BreakingNews;