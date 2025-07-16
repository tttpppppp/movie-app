import type { Credits, Genre, ReleaseDatesResponse } from "./media.type";

export interface MovieType {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids?: number[];
  genres: Genre[];
  adult: boolean;
  video: boolean;
  original_language: string;
  media_type: string;
  profile_path?: string; // optional
  release_dates?: ReleaseDatesResponse;
  credits?: Credits;
  origin_country?: string[];
  status?: string;
  revenue?: number;
  budget?: number;
}
