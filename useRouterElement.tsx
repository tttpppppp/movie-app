import { useRoutes } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import LayoutClient from "./src/pages/Layout/LayoutClient";
import { lazy } from "react";
const MovieDetail = lazy(() => import("./src/pages/MovieDetail"));
const TvShow = lazy(() => import("./src/pages/TvShow"));
const PeopleDetail = lazy(() => import("./src/pages/PeopleDetail"));
const SearchPage = lazy(() => import("./src/pages/SearchPage"));
export default function RouterElement() {
  const element = useRoutes([
    {
      path: "/",
      element: (
        <LayoutClient>
          <HomePage />
        </LayoutClient>
      ),
    },
    {
      path: "/detail/movie/:id",
      element: (
        <LayoutClient>
          <MovieDetail />
        </LayoutClient>
      ),
    },
    {
      path: "/detail/tvshow/:id",
      element: (
        <LayoutClient>
          <TvShow />
        </LayoutClient>
      ),
    },
    {
      path: "/people/:id",
      element: (
        <LayoutClient>
          <PeopleDetail />
        </LayoutClient>
      ),
    },
    {
      path: "/search",
      element: (
        <LayoutClient>
          <SearchPage />
        </LayoutClient>
      ),
    },
  ]);
  return element;
}
