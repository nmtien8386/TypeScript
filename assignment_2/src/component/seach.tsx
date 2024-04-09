import { useForm, SubmitHandler } from "react-hook-form";
// import { getTrips } from "../api/trips.api";
import moment from "moment";

type SearchForm = {
  toStation: string;
  fromStation: string;
  startTime_gte: string;
};

const Search = (props: { onSearch: (query: string) => void }) => {
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm<SearchForm>();

  const onSubmit: SubmitHandler<SearchForm> = async (data) => {
    const query = new URLSearchParams(data);
    props.onSearch(query.toString());
  };
  return (
    <form className="flex py-5 mx-4 gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-4 w-[85%] border rounded divide-x px-2">
        <div className="h-full flex items-center">
          <div className="p-1">
            <label className="text-xs text-gray-400" htmlFor="username">
              Điểm đi
            </label>
            <input
              {...register("fromStation")}
              required
              className="p-1 outline-none border-none"
              type="text"
              id="username"
            />
          </div>
        </div>
        <div className="h-full flex items-center">
          <div className="p-1">
            <label className="text-xs text-gray-400" htmlFor="username">
              Điểm đến
            </label>
            <input
              {...register("toStation")}
              className="p-1 outline-none border-none"
              type="text"
              id="username"
            />
          </div>
        </div>
        <div className="h-full flex items-center">
          <div className="p-1">
            <label className="text-xs text-gray-400" htmlFor="username">
              Ngày đi
            </label>
            <input
              min={moment().format("YYYY-MM-DD")}
              {...register("startTime_gte")}
              className="p-1 outline-none border-none w-full"
              type="date"
              id="username"
            />
          </div>
        </div>
        <div className="h-full flex items-center justify-center text-blue-500">
          <label className="text-blue-500 cursor-default" htmlFor="username">
            Thêm ngày về
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-blue-500 text-black font-semibold flex-1 whitespace-nowrap rounded-lg"
      >
        Tìm kiếm
      </button>
    </form>
  );
};

export default Search;
