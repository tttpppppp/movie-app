/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MediaType } from "../../types/shared-media.type";
import MovieCard from "../MediaList/MovieCard";
interface Props {
  mediaList: MediaType[];
  title: string;
}
const RelatedMediaList = ({ mediaList = [], title }: Props) => {
  return (
    <div>
      <p className="font-bold text-[1.4vw] my-4">{title}</p>
      {mediaList.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
          {mediaList.map((item: MediaType) => (
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
    </div>
  );
};

export default RelatedMediaList;
