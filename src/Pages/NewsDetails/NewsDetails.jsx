import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

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

    const w = content.split("\n")

    return (
        <div className="">
            {/* <Helmet > */}
            {/* <title>{title}</title> */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={content} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:url" content={`https://nekrenews.net/news/${_id}`} />
            <meta property="og:type" content="article" />
            {/* <meta name="twitter:card" content="summary_large_image" /> */}
            {/* </Helmet> */}
            <div className="mx-auto max-w-[1000px]  p-10">
                <img className=" mx-auto" src={imageUrl} alt="" />
                <h1 className="text-4xl my-7 ">{title}</h1>
                {
                    w?.map((item, i) =>
                        <p key={i} className="my-4">
                            {item}
                        </p>
                    )
                }
            </div>

        </div >
    );
};

export default NewsDetails;