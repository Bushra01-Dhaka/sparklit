import { Outlet } from "react-router-dom";
import Navbar from "../Reused/Navbar";
// import ResponsiveAppBar from "../Reused/Navbar";

const MainLayout = () => {
    return (
        <div>
          {/* <div className="md:max-w-screen-xl ms-auto">
         <ResponsiveAppBar></ResponsiveAppBar>
          </div> */}
          <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;