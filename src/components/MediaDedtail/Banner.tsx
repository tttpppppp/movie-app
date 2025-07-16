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
    <div className="relative text-white overflow-hidden shadow-sm">
      {/* Background image */}
      <ImageComponent
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
        width={800}
        height={500}
        className="absolute inset-0 w-full brightness-[.2] -z-10"
      />

      {/* Content */}
      <div className="relative max-w-screen-xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
        {/* Poster */}
        <div className="flex-shrink-0 w-full lg:w-[300px]">
          <ImageComponent
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            width={300}
            height={450}
            className="rounded-lg w-full"
          />
        </div>

        {/* Movie Info */}
        <div className="flex-1 text-base space-y-5">
          <div className="text-4xl flex gap-2">
            <h1 className="font-bold">{title}</h1>
            <span className="text-slate-500">
              {`(${release_date?.split("-")[0]})`}
            </span>
          </div>

          <div className="flex items-center flex-wrap gap-4 text-sm text-gray-300">
            <span className="border border-gray-400 px-2 py-0.5 rounded">
              {certification}
            </span>
            <span>
              {release_date}
              <span className="ml-1"></span>
              {`(${origin_country})`}
            </span>
            <span>
              {(genres || []).map((item: Genre) => item.name).join(", ")}
            </span>
            <span>{runtime ? `${runtime} phút` : ""}</span>
          </div>

          {/* Rating + Trailer */}
          <div className="flex items-center mt-2">
            <div className="flex items-center justify-center">
              {/* <CircularProcessbar
                  size={60}
                  percent={90}
                  strokeColor="limegreen"
                /> */}
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded transition"
              onClick={() => {
                setisShowing(true);
                setcontent(
                  <iframe
                    title="Trailer"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                    className="w-[50vw] aspect-video"
                  />
                );
              }}
            >
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
          </div>

          {/* Overview */}
          <p className="text-slate-300 mt-2 italic">{tagline}</p>
          <div>
            <h2 className="text-xl font-semibold mb-1">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              {overview ? overview : "Đang cập nhật..."}
            </p>
          </div>

          {/* Credits */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-gray-400">Director</p>
              <p className="font-semibold">{director?.name}</p>
            </div>
            <div>
              <p className="text-gray-400">Writer</p>
              <p className="font-semibold">
                {" "}
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
