/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from "../components/MediaDedtail/Banner";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ActorList from "../components/MediaDedtail/ActorList";
import RelatedMediaList from "../components/MediaDedtail/RelatedMediaList";
import MovieImfomation from "../components/MediaDedtail/MovieImfomation";
import useFetch from "../hooks/useFetch";
import type { MediaType, VideoType } from "../types/shared-media.type";
import type { ApiResponse } from "../types/media.type";
import { Helmet } from "react-helmet";

const MovieDetail = () => {
  const { id } = useParams();
  const { data: movieDetail, isLoading: isMovieLoading } = useFetch<MediaType>(
    `movie/${id}?append_to_response=release_dates,credits,videos&language=vi-VN`
  );
  const { data: videoResponse } = useFetch<{ results: VideoType[] }>(
    `movie/${id}/videos`,
    { enabled: !!id }
  );
  const { data: relatedMovie, isLoading: isRelatedLoading } = useFetch<
    ApiResponse<MediaType>
  >(`movie/${id}/recommendations?language=vi-VN`);

  if (isMovieLoading || isRelatedLoading) {
    return <Loading />;
  }
  const certification = movieDetail?.release_dates?.results
    ?.find((item: any) => item.iso_3166_1 === "US")
    ?.release_dates?.find((item: any) => item.certification)?.certification;

  const director = movieDetail?.credits?.crew?.find(
    (member) => member.job === "Director"
  );

  const writers = movieDetail?.credits?.crew?.filter(
    (member) => member.job === "Writer" || member.department === "Writing"
  );

  return (
    <div>
      <Helmet>
        <title>Phim - {movieDetail?.title || ""}</title>
        <meta name="description" content="Xem phim hay miễn phí" />
        <link rel="canonical" href="https://example.com/phim" />
      </Helmet>

      {movieDetail && (
        <Banner
          backdrop_path={movieDetail.backdrop_path}
          poster_path={movieDetail.poster_path}
          title={movieDetail?.title || ""}
          overview={movieDetail.overview}
          release_date={movieDetail?.release_date || ""}
          certification={certification}
          director={director}
          writers={writers}
          genres={movieDetail.genres}
          runtime={movieDetail.runtime}
          tagline={movieDetail.tagline}
          origin_country={movieDetail?.origin_country || []}
          trailerVideoKey={
            (videoResponse?.results || []).find(
              (item) => item.type === "Trailer"
            )?.key
          }
        />
      )}
      <div className="bg-black text-white text-[1.2vw]">
        <div className="flex flex-col-reverse sm:flex-row  max-w-screen-xl mx-auto p-6 py-10 gap-5">
          <div className="flex-[2]">
            {movieDetail?.credits?.cast && (
              <ActorList actor={movieDetail?.credits?.cast} />
            )}
            {relatedMovie && (
              <RelatedMediaList
                mediaList={relatedMovie.results}
                title="More like this"
              />
            )}
          </div>
          {movieDetail && <MovieImfomation movieInfo={movieDetail} />}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
