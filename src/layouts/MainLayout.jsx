import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-6xl  lg:mx-auto mx-6 my-10">
        <Nav></Nav>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
