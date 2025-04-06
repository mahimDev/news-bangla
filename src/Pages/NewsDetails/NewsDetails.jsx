import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const NewsDetails = () => {
    const news = useLoaderData()
    // const { pathname } = useLocation()
    // const id = pathname.split("/")[2]
    // const axiosnPublic = useAxiosPublic()
    // const { data: news = [] } = useQuery({
    //     queryKey: ["news", id],
    //     queryFn: async () => {
    //         const { data } = await axiosnPublic.get(`/news/${id}`)
    //         console.log(data)
    //         return data
    //     }
    // })
    console.log(news)
    const {

        category,
        content,
        imageUrl,
        title,
        _id }
        = news
    return (
        <div className="">
            <div className="mx-auto max-w-[1000px]  p-10">
                <img className="" src={imageUrl} alt="" />
                <h1 className="text-4xl my-7 ">{title}</h1>
                <p>{content}</p>
            </div>

        </div>
    );
};

export default NewsDetails;