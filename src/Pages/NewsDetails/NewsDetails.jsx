import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const NewsDetails = () => {
    const axiosnPublic = useAxiosPublic()
    useEffect(() => {
        const res = axiosnPublic.get(`news`)
        console.log(res)
    }, [axiosnPublic])
    const loader = useLoaderData()
    console.log(loader)
    return (
        <div>
            NewsDetails
        </div>
    );
};

export default NewsDetails;