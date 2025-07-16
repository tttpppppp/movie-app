import { Link } from "react-router-dom";
import ImageComponent from "../Image";

export interface NormalizedCast {
  id: number;
  name: string;
  profile_path: string | null;
  character: string;
  episodeCount?: number;
}

const ActorInfo = ({ data }: { data: NormalizedCast }) => {
  return (
    <Link
      to={`/people/${data.id}`}
      className="border border-slate-400 rounded shadow-sm bg-black text-white"
    >
      <ImageComponent
        src={`https://image.tmdb.org/t/p/w276_and_h350_face/${data.profile_path}`}
        width={276}
        height={350}
        className="w-full rounded"
      />
      <div className="p-3">
        <p className="font-bold">{data.name}</p>
        <p>{data.character}</p>
        <p>{data?.episodeCount}</p>
      </div>
    </Link>
  );
};

export default ActorInfo;
