import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import Entertainment from "../../Components/Entertainment/Entertainment";
import International from "../../Components/International/International";
import NewsCard from "../../Components/NewsCard/NewsCard";
import Sports from "../../Components/Sports/Sports";

const Home = () => {

    return (
        <div className="md:w-10/12 mx-auto space-y-10 md:my-20 min-h-[80vh] p-1">
            <div className="  mx-auto my-10">
                <BreakingNews />
            </div>
            <div className="my-20">
                <NewsCard />
            </div>
            <div className=" my-10">
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