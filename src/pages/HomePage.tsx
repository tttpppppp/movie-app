import FutureMovie from "../components/FeatureMovies";
import MediaList from "../components/MediaList";
import { TAB_LIST, Top_Rated } from "../lib/constant";
import { Helmet } from "react-helmet";
function HomePage() {
  return (
    <>
      <div>
        <Helmet>
          <title>Trang Phim - Cập nhật thông tin phim mới nhất</title>
          <meta name="description" content="Xem phim hay miễn phí" />
          <link rel="canonical" href="https://example.com/phim" />
        </Helmet>

        <FutureMovie />
        <MediaList title="Trending now" tabs={TAB_LIST} />
        <MediaList title="Top Rated" tabs={Top_Rated} />
      </div>
    </>
  );
}

export default HomePage;
