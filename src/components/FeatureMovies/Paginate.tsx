import { useEffect } from "react";
import type { MediaType } from "../../types/shared-media.type";

interface Props {
  moviesPopular: MediaType[];
  setselectedId: (id: number) => void;
  selectedId?: number;
}
const Paginate = ({ moviesPopular, setselectedId, selectedId }: Props) => {
  useEffect(() => {
    if (!moviesPopular.length) return;

    const interval = setTimeout(() => {
      const currentIndex = moviesPopular.findIndex((m) => m.id === selectedId);
      const nextIndex = (currentIndex + 1) % moviesPopular.length;
      const nextMovieId = moviesPopular[nextIndex].id;
      setselectedId(nextMovieId);
    }, 4000);
    return () => clearTimeout(interval);
  }, [moviesPopular, selectedId, setselectedId]);
  return (
    <div>
      {" "}
      <ul className="flex items-center gap-2 absolute bottom-4 right-8">
        {moviesPopular.map((movie) => (
          <li
            key={movie.id}
            className={`w-4 h-1 cursor-pointer ${
              movie.id === selectedId ? "bg-slate-100" : "bg-slate-500"
            }`}
            onClick={() => {
              setselectedId(movie.id);
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Paginate;
