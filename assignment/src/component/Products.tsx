import Button from "./Button"
import Search from "./seach"
const Products = () => {
    return (
        <div className="">
        <Search />
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
                <div className="flex h-56 p-5 mb-3 rounded-xl bg-gray-200">
                    <img src="./public/images/product.jpg" alt="" className="w-40 h-40"  />
                    <div className="text p-3 leading-10">
                        <span className="text-lg font-medium">Hải Phòng Travel (Đất cảng)</span>
                        <p className="text-base font-medium">19:00 - Hà Nội</p>
                        <p className="text-sm font-light">1h30m</p>
                        <p className="text-base font-medium text-slate-600">20:00 - Hải Phòng</p>
                    </div>
                    <div className="price p-3 leading-10" >
                        <span className="text-blue-600" >Từ 230.000đ</span>
                        <p>Còn 11 chỗ trống</p>
                        <Button title="Chọn chuyến"/>
                    </div>
                </div>
                <div className="flex h-56 p-5 mb-3 rounded-xl bg-gray-200">
                    <img src="./public/images/product.jpg" alt="" className="w-40 h-40"  />
                    <div className="text p-3 leading-10">
                        <span className="text-lg font-medium">Hải Phòng Travel (Đất cảng)</span>
                        <p className="text-base font-medium">19:00 - Hà Nội</p>
                        <p className="text-sm font-light">1h30m</p>
                        <p className="text-base font-medium text-slate-600">20:00 - Hải Phòng</p>
                    </div>
                    <div className="price p-3 leading-10" >
                        <span className="text-blue-600" >Từ 230.000đ</span>
                        <p>Còn 11 chỗ trống</p>
                        <Button title="Chọn chuyến"/>
                    </div>
                </div>
                <div className="flex h-56 p-5 mb-3 rounded-xl bg-gray-200">
                    <img src="./public/images/product.jpg" alt="" className="w-40 h-40"  />
                    <div className="text p-3 leading-10">
                        <span className="text-lg font-medium">Hải Phòng Travel (Đất cảng)</span>
                        <p className="text-base font-medium">19:00 - Hà Nội</p>
                        <p className="text-sm font-light">1h30m</p>
                        <p className="text-base font-medium text-slate-600">20:00 - Hải Phòng</p>
                    </div>
                    <div className="price p-3 leading-10" >
                        <span className="text-blue-600" >Từ 230.000đ</span>
                        <p>Còn 11 chỗ trống</p>
                        <Button title="Chọn chuyến"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Products