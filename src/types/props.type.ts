import type { Genre, CrewMember } from "./media.type";

export interface BannerProps {
  backdrop_path: string;
  poster_path: string;
  title: string;
  release_date: string;
  genres: Genre[];
  overview: string;
  director?: CrewMember;
  writers?: CrewMember[];
  certification?: string;
  trailerVideoKey?: string;
  origin_country: string[];
  runtime?: number;
  tagline?: string;
}
