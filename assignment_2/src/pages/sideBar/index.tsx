import { Link } from "react-router-dom";
const Bar = () =>{
    return (
        <div className="w-full h-full bg-[#F2F2F2] ">
            <form action="" method="post" className="block w-full h-14 text-center">
                <input type="text" placeholder="search" className="w-full h-8 p-3 my-3 rounded-lg "/>
            </form>
            <ul className="mt-2 mx-2">
                <li className="bg-[#DADADA] mb-4 py-3 text-center rounded-xl">
                    Dashboard
                </li>
                <li className="bg-[#DADADA] mb-4 py-3 text-center rounded-xl">
                    Lịch sử chuyến xe
                </li>
                <li className="bg-[#DADADA] mb-4 py-3 text-center rounded-xl">
                    <Link to="/dashboard/view">Chuyến xe</Link>
                </li>
                <li className="bg-[#DADADA] mb-4 py-3 text-center rounded-xl">
                    Nhà xe
                </li>
            </ul>
        </div>
    )
}
export default Bar ;