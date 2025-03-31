import { Outlet } from "react-router-dom";
import NavBer from "../Components/NavBer/NavBer";

const MainLayout = () => {
    return (
        <div className="">
            <nav className="">
                <NavBer />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer className="bg-blue-200 py-3">
                footer
            </footer>
        </div>
    );
};

export default MainLayout;