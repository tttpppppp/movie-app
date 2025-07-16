import type {
  Credits,
  CrewMember,
  Genre,
  ReleaseDatesResponse,
} from "./media.type";
import type { AggregateCastMember } from "./tv.type";

export type TmdbResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};
export interface MediaType {
  id: number;
  title?: string; // movie
  name?: string; // tv
  original_title?: string; // movie
  original_name?: string; // tv
  overview: string;
  release_date?: string; // movie
  first_air_date?: string; // tv
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids?: number[];
  genres: Genre[];
  adult?: boolean; // movie
  video?: boolean; // movie
  original_language: string;
  media_type: "movie" | "tv"; // phân biệt
  profile_path?: string;
  release_dates?: ReleaseDatesResponse; // movie
  credits?: Credits; // movie
  origin_country?: string[]; // movie
  status?: string;
  revenue?: number; // movie
  budget?: number;
  runtime: number;
  tagline: string;
  videos: {
    results: VideoItem[];
  }; // movie
  created_by?: {
    id: number;
    name: string;
    profile_path: string | null;
  }[]; // tv
  content_ratings?: {
    results: {
      iso_3166_1: string;
      rating: string;
    }[];
  }; // tv
  aggregate_credits?: {
    cast: AggregateCastMember[];
    crew: CrewMember[];
  };
  networks?: NetworkType[];
}

export interface NetworkType {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}
interface VideoItem {
  key: string;
  site: string;
  type: string;
  name: string;
}
export interface VideoType {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string; // e.g., "YouTube"
  size: number;
  type: string; // e.g., "Trailer", "Teaser", etc.
  official: boolean;
  published_at: string;
}
