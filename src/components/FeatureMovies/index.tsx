/* eslint-disable react-hooks/exhaustive-deps */
import Paginate from "./Paginate";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import type {
  MediaType,
  TmdbResponse,
  VideoType,
} from "../../types/shared-media.type";
import useFetch from "../../hooks/useFetch";

const FutureMovie = () => {
  const [selectedId, setselectedId] = useState<number | undefined>();

  const { data } = useFetch<TmdbResponse<MediaType>>(
    "movie/popular?language=vi-VN"
  );
  const movies = data?.results?.slice(0, 4) ?? [];
  const { data: videoResponse } = useFetch<{ results: VideoType[] }>(
    `movie/${selectedId}/videos`,
    {
      enabled: !!selectedId,
    }
  );

  useEffect(() => {
    if (movies[0]?.id) {
      setselectedId(movies[0]?.id);
    }
  }, [JSON.stringify(movies)]);

  return (
    <div className="relative w-full h-[300px] sm:h-[650px]">
      {movies
        .filter((item) => item.id == selectedId)
        .map((movie) => (
          <Movie
            key={movie.id}
            data={movie}
            trailerVideoKey={
              (videoResponse?.results || []).find(
                (item) => item.type == "Trailer" && item.site == "YouTube"
              )?.key
            }
          />
        ))}
      <Paginate
        moviesPopular={movies}
        setselectedId={setselectedId}
        selectedId={selectedId}
      />
    </div>
  );
};

export default FutureMovie;
