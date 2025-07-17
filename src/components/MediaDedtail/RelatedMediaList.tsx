/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import type { MediaType } from "../../types/shared-media.type";
import MovieCard from "../MediaList/MovieCard";
interface Props {
  mediaList: MediaType[];
  title: string;
}
const RelatedMediaList = ({ mediaList = [], title }: Props) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    const scrollBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

    if (scrollBottom && !isLoading && visibleCount < mediaList.length) {
      setIsLoading(true);
      setTimeout(() => {
        const next = Math.min(visibleCount + 8, mediaList.length);
        setVisibleCount(next);
        setIsLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const visibleItems = mediaList.slice(0, visibleCount);
  return (
    <div>
      <p className="font-bold text-[1.4vw] my-4">{title}</p>
      {mediaList.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {visibleItems.map((item: MediaType) => (
            <MovieCard
              key={item.id}
              id={item.id}
              media_type={item.media_type}
              title={item.title || item.name}
              release_date={item.release_date || item.first_air_date}
              popularity={item.popularity}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              activeTabId=""
            />
          ))}
        </div>
      ) : (
        <p className="text-center w-full">Đang cập nhật...</p>
      )}
      {isLoading && (
        <div className="flex justify-center items-center mt-4">
          <div className="text-center py-4">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default RelatedMediaList;
