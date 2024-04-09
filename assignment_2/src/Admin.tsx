import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import Bar from "./pages/sideBar";
const DashBoard = () => {
  return (
    <div className="">
      <Header />
      <div className="w-full flex">
        <div className="w-3/12 border-solid border-r-2 border-black">
          <Bar />
        </div>
        <div className="w-9/12 mx-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
