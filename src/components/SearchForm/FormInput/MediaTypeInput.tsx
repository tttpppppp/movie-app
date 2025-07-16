/* eslint-disable @typescript-eslint/no-explicit-any */
const MediaTypeInput = ({ onChange, value, name }: any) => {
  return (
    <div className="accent-black ">
      <input
        type="radio"
        name={name}
        value="movie"
        onChange={onChange}
        checked={value === "movie"}
        id="sf-type-movie"
      />
      <label htmlFor="sf-type-movie" className="m-1">
        Movie
      </label>{" "}
      <br />
      <input
        type="radio"
        name={name}
        value="tv"
        onChange={onChange}
        checked={value === "tv"}
        id="sf-type-tv"
      />
      <label htmlFor="sf-type-tv" className="m-1">
        Tv show
      </label>
    </div>
  );
};

export default MediaTypeInput;
