
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import ShareButtons from "../../Components/ShareButtons/ShareButtons";

const NewsDetails = () => {
    const news = useLoaderData()
    const {

        category,
        content,
        imageUrl,
        title,
        _id }
        = news

    const cont = content?.split("\n")

    return (
        <div className="">
            <Helmet >
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={content?.slice(0, 160)} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:url" content={`https://nekrenews.net/news/${_id}`} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="canonical" href={`https://nekrenews.net/news/${_id}`} />

            </Helmet>
            <div className="flex justify-center my-4">
                <ShareButtons newsId={_id} title={title} />
            </div>
            <div className="mx-auto max-w-[1000px]  p-10">
                <img className=" mx-auto" src={imageUrl} alt="" />
                <h1 className="text-4xl my-7 ">{title}</h1>
                {
                    cont?.map((item, i) =>
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