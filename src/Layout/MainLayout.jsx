import { Outlet } from "react-router-dom";
import NavBer from "../Components/NavBer/NavBer";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="">
            <nav className="sticky -top-[160px] md:-top-[125px] z-[100] bg-white shadow-lg ">
                <NavBer />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer className="">
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayout;