import axios from "axios";
import { useEffect, useState } from "react";
import { ITrip } from "../../interfaces";
import { Link } from "react-router-dom";
// import { deleteTrip } from "../../api/trips.api";

const TripList = () => {
  const [trips, setTrips] = useState<ITrip[]>([]);
  const getTrips = async () => {
    const { data } = await axios.get(
      "http://localhost:3000/trips?_expand=busHouses&_expand=station"
    );
    setTrips(data);
  };
  useEffect(() => {
    getTrips();
  }, []);

// const handleDelete = async (id?: number | string) => {
//   try{
//     if(id){
//       deleteTrip(id);
//     }
//   }catch(err){
//     alert("Xoa that bai");
//   }
  return (
    <div>
      <h1 className="text-2xl">Danh sách chuyến đi</h1>
      <Link className="underline hover:cursor-pointer" to="/dashboard/add">
        Thêm mới chuyến đi
      </Link>
      {trips.map((trip) => (
        <Trip key={trip.id} data={trip} />
      ))}
    </div>
  );
};

const Trip = (props: { data: ITrip }) => {
  return (
    <div className="w-full h-56 mt-4 bg-[#F2F2F2] rounded-lg">
      <div className="grid grid-cols-2 p-4">
        <span className="text-lg text-black font-medium">
          Mã chuyến xe: {props.data.busHouses?.id}
        </span>
        <span className="text-lg text-black font-medium ">
          Tên nhà xe: {props.data.busHouses?.name}
        </span>
        <span className="text-lg text-black font-medium mt-4">
          Số điện thoại: {props.data.busHouses?.phone}
        </span>
        <span className="text-lg text-black font-medium mt-4">
          Giá: {props.data.price}
        </span>
        <span className="text-lg text-black font-medium mt-4">
          Số ghế còn trống: {props.data.seats}
        </span>
        <span className="text-lg text-black font-medium mt-4">
          Khởi hành: {props.data.startTime}
        </span>
        <span className="text-lg text-black font-medium mt-4">
          Bến xe: {props.data.station?.name}
        </span>
        <span className="text-lg text-black font-medium mt-4">
          Điểm đi: {props.data.toStation}
        </span>
        <span className="text-lg text-black font-medium mt-4">
          Điểm đến: {props.data.fromStation}
        </span>
        {/* <span className="text-lg text-black font-medium mt-4">
          <button onClick={() => handleDelete()} className="bg-red-600 px-4 rounded-lg">Delete</button>
        </span> */}
      </div>
    </div>
  );
};

export default TripList;
