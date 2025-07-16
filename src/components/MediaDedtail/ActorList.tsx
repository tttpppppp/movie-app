import { useState } from "react";
import ActorInfo from "./ActorInfo";
import type { AggregateCastMember } from "../../types/tv.type";
import type { CastMember } from "../../types/media.type";

type GeneralCastMember = CastMember | AggregateCastMember;
interface ActorListProps {
  actor: GeneralCastMember[];
}
const ActorList = ({ actor = [] }: ActorListProps) => {
  const [isShowMore, setisShowMore] = useState(false);

  const currentActor = isShowMore ? actor.slice(0, 32) : actor.slice(0, 4);
  return (
    <div>
      <p className="font-bold text-[1.4vw] mb-4">Actors</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
        {currentActor.map((item: GeneralCastMember) => {
          return <ActorInfo key={item.id} data={item} />;
        })}
      </div>
      <p
        className="cursor-pointer mt-1"
        onClick={() => {
          setisShowMore(!isShowMore);
        }}
      >
        {isShowMore ? "Show less" : "Show more"}
      </p>
    </div>
  );
};

export default ActorList;
