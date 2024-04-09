import Header from "./component/Header";
import Card from "./component/Card";
import Footer from "./component/Footer";
import { useState } from "react";
import { getTrips } from "./api/trips.api";
import Banner from "./component/Banner";
import Search from "./component/seach";
import { ITrip } from "./interfaces";
import { Ticket } from "./Ticket";

const HomePage = () => {
  const [trips, setTrips] = useState<ITrip[]>([])
  const handleSearch = async (query: string) => {
    const { data } = await getTrips(query)
    setTrips(data)
  };
  return (
    <>
      <Header />
      <div className="relative h-[400px] banner">
        <img
          className="w-full h-full object-cover"
          src="https://229a2c9fe669f7b.cmccloud.com.vn/images/banner-main-vi.jpg"
          alt=""
        />
        <div className="w-full absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2">
          <div className="text-white font-semibold text-center text-2xl mb-5">
            Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ
          </div>
          <div className="w-8/12 min-w-[960px] bg-white mx-auto rounded-lg pt-1">
            <Banner />
            <Search onSearch={handleSearch} />
          </div>
        </div>
      </div>
          {trips.map(item => <Ticket key={item.id} />)}
      <div className="mx-40">
        {" "}
        <Card />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
