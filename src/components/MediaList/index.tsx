import { useState } from "react";
import MovieCard from "./MovieCard";
import type { MediaType, TmdbResponse } from "../../types/shared-media.type";
import useFetch from "../../hooks/useFetch";

const MediaList = ({
  title,
  tabs,
}: {
  title: string;
  tabs: { id: string; name: string; url: string }[];
}) => {
  const [activeTabId, setactiveTabId] = useState(tabs[0]?.id);
  const url = tabs.find((item) => item.id === activeTabId)?.url;
  const parts = url?.split("https://api.themoviedb.org/3/");
  const endpoint = parts?.[1] || "";

  const { data } = useFetch<TmdbResponse<MediaType>>(
    `${endpoint}?language=vi-VN`
  );

  const mediaList = data?.results.slice(0, 12) || [];

  return (
    <div className="px-8 py-10 text-[1vw] bg-black text-white">
      <div className="flex items-center gap-5 mb-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex border border-white rounded">
          {tabs.map((item) => (
            <li
              key={item.id}
              className={`px-2 py-1 rounded-sm  cursor-pointer ${
                activeTabId === item.id ? "bg-white text-black" : ""
              }`}
              onClick={() => setactiveTabId(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {mediaList.map((item) => {
          return (
            <MovieCard
              key={item.id}
              id={item.id}
              media_type={item.media_type}
              title={item?.title || item?.name}
              release_date={item.release_date || item.first_air_date}
              popularity={item.popularity}
              poster_path={item?.poster_path || item.profile_path || ""}
              vote_average={item.vote_average}
              activeTabId={activeTabId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MediaList;
