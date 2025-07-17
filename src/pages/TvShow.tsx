/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner from "../components/MediaDedtail/Banner";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ActorList from "../components/MediaDedtail/ActorList";
import RelatedMediaList from "../components/MediaDedtail/RelatedMediaList";
import useFetch from "../hooks/useFetch";
import type { ApiResponse } from "../types/media.type";
import TvImfomation from "../components/MediaDedtail/TvImfomation";
import type { MediaType, VideoType } from "../types/shared-media.type";
import { Helmet } from "react-helmet";
const TvShow = () => {
  const { id } = useParams();
  const slugId = id?.split("-").pop();
  const { data: movieDetail, isLoading: isMovieLoading } = useFetch<MediaType>(
    `tv/${slugId}?append_to_response=content_ratings,aggregate_credits,videos&language=vi-VN`
  );

  const { data: videoResponse } = useFetch<{ results: VideoType[] }>(
    `tv/${slugId}/videos`,
    { enabled: !!id }
  );
  const { data: relatedMovie, isLoading: isRelatedLoading } = useFetch<
    ApiResponse<MediaType>
  >(`tv/${slugId}/recommendations?language=vi-VN`);

  if (isMovieLoading || isRelatedLoading) {
    return <Loading />;
  }
  console.log(movieDetail);
  const certification = movieDetail?.content_ratings?.results?.find(
    (item) => item.iso_3166_1 === "US"
  )?.rating;

  const director = movieDetail?.aggregate_credits?.crew?.find(
    (member) => member.job === "Director"
  );

  const writers = movieDetail?.aggregate_credits?.crew?.filter(
    (member) => member.job === "Writer" || member.department === "Writing"
  );

  return (
    <div>
      <Helmet>
        <title>Tv show - {movieDetail?.name || ""}</title>
        <meta name="description" content="Xem phim hay miễn phí" />
        <link rel="canonical" href="https://example.com/phim" />
      </Helmet>
      {movieDetail && (
        <Banner
          backdrop_path={movieDetail.backdrop_path}
          poster_path={movieDetail.poster_path}
          title={movieDetail?.name || ""}
          overview={movieDetail.overview}
          release_date={movieDetail?.first_air_date || ""}
          certification={certification}
          director={director}
          writers={writers}
          genres={movieDetail.genres}
          origin_country={movieDetail.origin_country || []}
          tagline={movieDetail.tagline}
          trailerVideoKey={
            (videoResponse?.results || []).find(
              (item) => item.type === "Trailer"
            )?.key
          }
        />
      )}
      <div className="bg-black text-white text-[1.2vw]">
        <div className="flex max-w-screen-xl mx-auto p-6 py-10 gap-5">
          <div className="flex-[2]">
            {movieDetail?.aggregate_credits?.cast && (
              <ActorList
                actor={movieDetail.aggregate_credits.cast.map((item) => ({
                  ...item,
                  character: item.roles[0].character,
                  episodeCount: item.roles[0].episode_count,
                }))}
              />
            )}

            {relatedMovie && (
              <RelatedMediaList
                mediaList={relatedMovie.results}
                title="More like this"
              />
            )}
          </div>
          {movieDetail && <TvImfomation tvInfo={movieDetail} />}
        </div>
      </div>
    </div>
  );
};

export default TvShow;
