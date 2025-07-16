import { useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import useFetch from "../hooks/useFetch";
import RelatedMediaList from "../components/MediaDedtail/RelatedMediaList";
import type { MediaType, TmdbResponse } from "../types/shared-media.type";
import { Helmet } from "react-helmet";
import Loading from "../components/Loading";
import Pagination from "../components/SearchForm/Pagination";

const SearchPage = () => {
  const [valueFormSearch, setvalueFormSearch] = useState({
    mediaType: "movie",
    genres: [],
    rating: "all",
  });

  const [page, setpage] = useState(1);

  const [min, max] =
    valueFormSearch.rating === "all"
      ? [0, 100]
      : valueFormSearch.rating.split(" - ").map(Number);

  const { data, isLoading } = useFetch<TmdbResponse<MediaType>>(
    `discover/${
      valueFormSearch.mediaType
    }?sort_by=popularity.desc&with_genres=${valueFormSearch.genres.join(
      ","
    )}&vote_average.gte=${min / 10}&vote_average.lte=${max / 10}&page=${page}`
  );

  console.log(valueFormSearch);

  return (
    <div>
      <Helmet>
        <title>Tìm kiếm</title>
        <meta name="description" content="Xem phim hay miễn phí" />
        <link rel="canonical" href="https://example.com/phim" />
      </Helmet>
      <div className="container">
        <p className="font-bold text-2xl mb-2">Search</p>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="flex-1 border p-4 rounded-lg shadow-sm mt-4">
            <SearchForm setvalueFormSearch={setvalueFormSearch} />
          </div>
          <div className="flex-[3]">
            {isLoading ? (
              <Loading />
            ) : (
              <div>
                <RelatedMediaList mediaList={data?.results || []} title="" />
              </div>
            )}
            <Pagination
              currentPage={page}
              totalPages={data?.total_pages || 0}
              onPageChange={(newPage) => setpage(newPage)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
