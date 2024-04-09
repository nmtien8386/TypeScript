import busIcon from "/bus.svg"
import airlineIcon from "/airline.svg"
import trainIcon from "/train.svg"
import rentIcon from "/rent.svg"

const Banner = () => {
  return (
    <div className="flex gap-6 justify-center items-center text-base border-b border-gray-300">
        <div className="">
            <button className="flex gap-1">
                <img src={busIcon} alt="" />
                Xe khách
            </button>
        </div>
        <div className="">
            <button className="flex gap-1">
                <img src={airlineIcon} alt="" />
                Máy bay
            </button>
        </div>
        <div className="">
            <button className="flex gap-1">
                <img src={trainIcon} alt="" />
                Tàu hoả
            </button>
        </div>
        <div className="">
            <button className="flex gap-1">
                <img src={rentIcon} alt="" />
                Thuê xe
            </button>
        </div>
    </div>
)
};
export default Banner;
