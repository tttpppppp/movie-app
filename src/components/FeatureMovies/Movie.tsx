import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import type { MediaType } from "../../types/shared-media.type";
import { useModal } from "../../context/ModalProvider";

interface Props {
  data: MediaType;
  trailerVideoKey?: string;
}
const Movie = ({ data, trailerVideoKey }: Props) => {
  const { setcontent, setisShowing } = useModal();
  return (
    <div>
      {" "}
      <img
        src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
        className="absolute inset-0 w-full h-full object-cover brightness-50 object-top"
        alt="Banner"
      />
      <div className="absolute bottom-[15%] left-8 w-[90%] sm:w-1/2 text-white">
        <p className="font-bold text-xl sm:text-3xl mb-2">{data?.title}</p>
        <div>
          <p className="text-gray-300 border border-gray-400 inline-block px-2 py-1 rounded-sm text-sm mb-2">
            BG13
          </p>
          <p className="text-sm sm:text-base">{data?.release_date}</p>
        </div>
        <div className="hidden sm:block text-sm sm:text-base mt-3">
          <p className="font-bold mb-2">Overview</p>
          <p>{data?.overview}</p>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <button
            className="bg-white text-black px-4 py-2 rounded-sm flex items-center gap-2 text-sm sm:text-lg"
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
          <Link
            to={`/detail/movie/${data.id}`}
            className="bg-slate-300/35 text-white px-4 py-2 rounded-sm flex items-center text-sm sm:text-lg"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
