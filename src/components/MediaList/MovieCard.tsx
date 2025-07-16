import { Link } from "react-router-dom";
import CircularProcessbar from "./CircularProcessbar";
import Image from "../Image";

interface MovieCardProps {
  id: number;
  poster_path: string;
  vote_average: number;
  popularity: number;
  title?: string;
  name?: string;
  release_date?: string;
  first_air_date?: string;
  media_type: "movie" | "tv";
  activeTabId: string;
}

const MovieCard = ({
  id,
  poster_path,
  vote_average,
  popularity,
  title,
  release_date,
  media_type,
  activeTabId,
}: MovieCardProps) => {
  return (
    <Link
      to={media_type == "tv" ? `/detail/tv/${id}` : `/detail/movie/${id}`}
      className="relative border border-slate-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      {(media_type === "tv" || (!media_type && activeTabId === "tv")) && (
        <p className="absolute right-1 top-1 bg-black text-white p-1 rounded text-sm z-40">
          TV Show
        </p>
      )}
      <Image
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        width={210}
        height={300}
        className={"w-full rounded-lg"}
      />
      <div className="px-4 relative -top-[1.5vw]">
        <CircularProcessbar
          percent={Math.round((vote_average ?? popularity ?? 0) * 10)}
          size={50}
          strokeColor={
            (vote_average ?? popularity ?? 0) >= 7
              ? "green"
              : (vote_average ?? popularity ?? 0) >= 5
              ? "orange"
              : "red"
          }
        />
        <p className="font-bold line-clamp-1">{title}</p>
        <p className="text-slate-300">{release_date}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
