export interface ApiResponse<T> {
  results: T[];
  page?: number;
  total_results?: number;
  total_pages?: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Role {
  credit_id: string;
  character: string;
  episode_count: number;
}

export interface CastMember {
  adult: boolean;
  cast_id?: number; // optional vì TV có thể thiếu
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  roles?: Role[]; // TV dùng
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
  department: string;
  credit_id: string;
  gender: number | null;
  original_name: string;
  popularity: number;
  profile_path: string | null;
}

export interface Credits {
  cast: CastMember[];
  crew: CrewMember[];
}

export interface ReleaseDate {
  certification: string;
  iso_639_1: string | null;
  note: string | null;
  release_date: string;
  type: number;
}

export interface ReleaseDateResult {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
}

export interface ReleaseDatesResponse {
  results: ReleaseDateResult[];
}
