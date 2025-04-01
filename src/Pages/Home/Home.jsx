import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import NewsCard from "../../Components/NewsCard/NewsCard";

const Home = () => {
    return (
        <div className="min-h-[80vh]">
            <div className="my-10">
                <BreakingNews title={"Breaking News"} />
            </div>
            <div className="my-20">
                <NewsCard />
            </div>
            <div className="my-10">
                <BreakingNews />
            </div>
        </div>
    );
};

export default Home;