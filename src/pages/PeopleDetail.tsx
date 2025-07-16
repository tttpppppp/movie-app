import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ImageComponent from "../components/Image";
import type { CombinedCredits, PersonDetail } from "../types/people.type";
import Loading from "../components/Loading";
import RelatedMediaList from "../components/MediaDedtail/RelatedMediaList";
import type { MediaType } from "../types/shared-media.type";
import { Helmet } from "react-helmet";

const PeopleDetail = () => {
  const { id } = useParams();
  const { data: person } = useFetch<PersonDetail>(`person/${id}`);
  const { data: credits } = useFetch<CombinedCredits>(
    `person/${id}/combined_credits`
  );
  if (!person)
    return (
      <div className="text-white p-6">
        <Loading />
      </div>
    );

  const genderMap: Record<number, string> = {
    0: "Not specified",
    1: "Female",
    2: "Male",
    3: "Non-binary",
  };

  return (
    <div className="bg-black min-h-screen">
      <Helmet>
        <title>{person?.name}</title>
        <meta name="description" content="Xem phim hay miễn phí" />
        <link rel="canonical" href="https://example.com/phim" />
      </Helmet>
      <div className="flex flex-col md:flex-row gap-10 p-6 container text-white">
        {/* LEFT COLUMN */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <ImageComponent
            src={`https://image.tmdb.org/t/p/w276_and_h350_face${person.profile_path}`}
            width={600}
            height={600}
            className="rounded-xl w-48 md:w-52 mb-6"
          />

          <div className="w-full">
            <h2 className="text-xl font-semibold mb-4 border-b border-slate-600 pb-2">
              Personal Info
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-slate-400 font-semibold">Known For</p>
                <p>{person.known_for_department}</p>
              </div>
              <div>
                <p className="text-slate-400 font-semibold">Gender</p>
                <p>{genderMap[person.gender] || "Đang cập nhật..."}</p>
              </div>
              <div>
                <p className="text-slate-400 font-semibold">Place of Birth</p>
                <p>{person.place_of_birth || "Đang cập nhật..."}</p>
              </div>
              <div>
                <p className="text-slate-400 font-semibold">Birthday</p>
                <p>{person.birthday || "Đang cập nhật..."}</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-2/3 flex flex-col justify-start">
          <h1 className="text-3xl font-bold mb-4">{person.name}</h1>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Biography</h3>
            <p className="text-slate-200 leading-relaxed text-sm whitespace-pre-line">
              {person.biography || "Đang cập nhật..."}
            </p>
          </div>
          <RelatedMediaList
            mediaList={credits?.cast as MediaType[]}
            title="Know this"
          />
        </div>
      </div>
    </div>
  );
};

export default PeopleDetail;
