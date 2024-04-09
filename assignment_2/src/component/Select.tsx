const Select = (props: {title: string , p: string}) => {
  return (
    <div>
      <label htmlFor="HeadlineAct" className="block text-gray-900 text-left">{props.title}</label>
      <select
        name="HeadlineAct"
        id="HeadlineAct"
        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
      >
        <option value="">Chọn</option>
        <option value="">{props.p}</option>
      </select>
    </div>
  );
};
export default Select;
