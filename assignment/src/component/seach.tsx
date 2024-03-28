import Select from "./Select"
const Search = () => {
    return(
        <div className="px-4 py-4 sm:px-6 lg:px-8 text-center mx-40 ">
            <form action="" method="post"  className="bg-gray-200 h-24 justify-around items-center p-4 flex gap-4 rounded-lg">
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
    )
}
export default Search