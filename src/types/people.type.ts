/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PersonDetail {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
}
export interface CombinedCredits {
  cast: {
    id: number;
    title?: string; // movie
    name?: string; // tv show
    character?: string;
    media_type: "movie" | "tv";
    poster_path: string | null;
  }[];
  crew: {
    id: number;
    department?: string;
    job?: string;
    media_type: "movie" | "tv";
    title?: string;
    name?: string;
    poster_path: string | null;
  }[];
}
