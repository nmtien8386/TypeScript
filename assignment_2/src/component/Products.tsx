import { Ticket } from "../Ticket"
const Products = () => {
    return (
        <div className="">
        <div className="main mx-48 flex gap-4 ">
            <div className="nav h-56 p-4 w-1/4 leading-7 rounded-lg bg-gray-200 ">
                <h1 className="text-xl font-bold">Sắp Xếp</h1>
                <form action="" method="post">
                    <ul>
                        <li><input type="radio" placeholder="none" name="a"/>Mặc định</li>
                        <li><input type="radio" placeholder="none" name="a"/>Giờ đi sớm nhất</li>
                        <li><input type="radio" placeholder="none" name="a"/>Giờ đi muộn nhất</li>
                        <li><input type="radio" placeholder="none" name="a"/>Đánh giá cao nhất</li>
                        <li><input type="radio" placeholder="none" name="a"/>Giá tăng dần</li>
                        <li><input type="radio" placeholder="none" name="a"/>Giá giảm dần</li>
                    </ul>
                </form>
            </div>
            <div className="listProduct w-3/4 h-full items-center justify-between">
                    <Ticket />
                    <Ticket />
                    <Ticket />
            </div>
        </div>
        </div>
    )
}
export default Products