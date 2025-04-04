import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import Entertainment from "../../Components/Entertainment/Entertainment";
import International from "../../Components/International/International";
import NewsCard from "../../Components/NewsCard/NewsCard";

const Home = () => {

    return (
        <div className="min-h-[80vh]">
            <div className="my-10">
                <BreakingNews />
            </div>
            <div className="my-20">
                <NewsCard />
            </div>
            <div className="my-10">
                <BreakingNews />
            </div>
            <div className="flex justify-center">
                <Entertainment />
            </div>
            <div className="flex justify-center">
                <International />
            </div>
        </div>
    );
};

export default Home;