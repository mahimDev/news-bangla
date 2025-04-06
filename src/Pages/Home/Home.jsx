import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import Entertainment from "../../Components/Entertainment/Entertainment";
import International from "../../Components/International/International";
import NewsCard from "../../Components/NewsCard/NewsCard";
import Sports from "../../Components/Sports/Sports";

const Home = () => {

    return (
        <div className="min-h-[80vh]">
            <div className="md:w-10/12 w-5/12 mx-auto my-10">
                <BreakingNews />
            </div>
            <div className="my-20">
                <NewsCard />
            </div>
            <div className="md:w-10/12 w-5/12  mx-auto my-10">
                <BreakingNews />
            </div>
            <div className="flex justify-center">
                <International />
            </div>
            <div className="flex justify-center">
                <Entertainment />
            </div>
            <div className="flex justify-center">
                <Sports />
            </div>

        </div>
    );
};

export default Home;