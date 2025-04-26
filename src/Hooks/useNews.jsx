import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useNews = () => {
    const axiosSecure = useAxiosSecure()
    const { data: news = [], isLoading, refetch } = useQuery({
        queryKey: ["all-news"],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all-news`)
            return data
        }
    })
    return { news, isLoading, refetch }
};

export default useNews;