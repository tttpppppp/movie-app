/* eslint-disable @typescript-eslint/no-explicit-any */
const RatingInput = ({ onChange, name }: any) => {
  return (
    <div>
      <select name={name} onChange={onChange} id="" className="border rounded">
        <option value="all">All</option>
        <option value="0 - 49">0 - 49</option>
        <option value="50 - 59">50 - 59</option>
        <option value="70 - 100">70 - 100</option>
      </select>
    </div>
  );
};

export default RatingInput;
