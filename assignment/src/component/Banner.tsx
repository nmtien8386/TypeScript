// import Button from "./Button";
import Select from "./Select";
const Banner = () => {
  return (
    <div className="relative w-full h-full">
      <section className="relative bg-[url('../public/images/banner.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="relative mx-auto max-w-screen-sm px-4 py-32 sm:px-6 lg:items-center lg:px-8">
          <div className="w-full text-center">
            <h1 className="text-white">Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</h1>
            <form action="" method="post"  className="bg-white h-24 items-center p-4 flex gap-4 rounded-lg">
              <Select title="Nơi xuất phát" p="Hà Nội"/>
              <Select title="Nơi đến" p="An Giang"/>
              <Select title="Ngày đi" p="Mai"/>
              <button className="border rounded-lg bg-slate-100 p-3 text-blue-600">
                Thêm ngày về
              </button>
              <button className="border rounded-lg bg-yellow-400 px-5 py-2 text-back">
                Tìm kiếm
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Banner;
