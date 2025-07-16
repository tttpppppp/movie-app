import type { CastMember, CrewMember, Genre, Role } from "./media.type";

export interface AggregateCastMember extends Omit<CastMember, "cast_id"> {
  total_episode_count: number;
  roles: Role[];
}

export interface TvType {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  first_air_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genres: Genre[];
  media_type: string;
  status?: string;
  created_by?: {
    id: number;
    name: string;
    profile_path: string | null;
  }[];
  content_ratings?: {
    results: {
      iso_3166_1: string;
      rating: string;
    }[];
  };
  aggregate_credits?: {
    cast: AggregateCastMember[];
    crew: CrewMember[];
  };
}
