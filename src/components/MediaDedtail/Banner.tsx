/* eslint-disable @typescript-eslint/no-explicit-any */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import ImageComponent from "../Image";
import type { BannerProps } from "../../types/props.type";
import type { Genre } from "../../types/media.type";
import { useModal } from "../../context/ModalProvider";

const Banner = ({
  backdrop_path,
  poster_path,
  title,
  release_date,
  genres,
  overview,
  director,
  writers,
  certification,
  trailerVideoKey,
  origin_country,
  runtime,
  tagline,
}: BannerProps) => {
  const { setcontent, setisShowing } = useModal();

  return (
    <div className="relative text-white overflow-hidden shadow-sm bg-black sm:bg-transparent">
      {/* Background image */}
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        width={800}
        height={500}
        className="absolute  inset-0 w-full brightness-[.2] -z-10 hidden sm:block"
      />

      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto p-4 sm:p-6 flex flex-col lg:flex-row gap-6 lg:gap-8 text-white">
        {/* Poster */}
        <div className="w-full lg:w-[300px] flex-shrink-0">
          <ImageComponent
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            width={300}
            height={450}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Movie Info */}
        <div className="flex-1 text-base space-y-5 mt-6 lg:mt-0">
          {/* Title */}
          <div className="text-3xl sm:text-4xl flex gap-2 flex-wrap items-center">
            <h1 className="font-bold">{title}</h1>
            <span className="text-slate-500">
              {`(${release_date?.split("-")[0]})`}
            </span>
          </div>

          {/* Metadata */}
          <div className="flex items-center flex-wrap gap-3 text-sm text-gray-300">
            {certification && (
              <span className="border border-gray-400 px-2 py-0.5 rounded">
                {certification}
              </span>
            )}
            <span>
              {release_date} ({origin_country})
            </span>
            {genres?.length > 0 && (
              <span>{genres.map((item: Genre) => item.name).join(", ")}</span>
            )}
            {runtime && <span>{runtime} phút</span>}
          </div>

          {/* Trailer + Rating */}
          <div className="flex items-center gap-4 flex-wrap">
            {/* Rating (chừa chỗ để bạn thêm sau nếu cần) */}
            {/* <div>★ {vote_average}</div> */}
            <button
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
              onClick={() => {
                setisShowing(true);
                setcontent(
                  <iframe
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                    className="w-[90vw] sm:w-[50vw] aspect-video"
                  />
                );
              }}
            >
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
          </div>

          {/* Tagline */}
          {tagline && <p className="text-slate-300 mt-2 italic">{tagline}</p>}

          {/* Overview */}
          <div>
            <h2 className="text-xl font-semibold mb-1">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              {overview ? overview : "Đang cập nhật..."}
            </p>
          </div>

          {/* Credits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-gray-400">Director</p>
              <p className="font-semibold">{director?.name}</p>
            </div>
            <div>
              <p className="text-gray-400">Writer</p>
              <p className="font-semibold">
                {(writers || []).map((item) => item.name).join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
