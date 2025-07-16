/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MediaType, NetworkType } from "../../types/shared-media.type";

const TvImfomation = ({ tvInfo }: { tvInfo: MediaType }) => {
  type InfoItem =
    | { label: string; value: string | undefined }
    | { label: string; value: string[] | undefined; isCountry: true }
    | { label: string; value: NetworkType[] | undefined; isNetwork: true };

  const data: InfoItem[] = [
    { label: "Original name", value: tvInfo?.original_name },
    {
      label: "Original Country",
      value: tvInfo?.origin_country,
      isCountry: true,
    },
    { label: "Status", value: tvInfo?.status },
    {
      label: "Network",
      value: tvInfo?.networks || [],
      isNetwork: true,
    },
  ];

  return (
    <div>
      <div className="flex-1 font-bold text-[1.4vw] mb-4"></div>
      {data.map((item, index) => (
        <div key={index} className="m-4">
          <p className="font-bold">{item.label}</p>

          {"isCountry" in item ? (
            <div className="flex gap-2">
              {(item.value ?? []).map((code: string) => (
                <img
                  key={code}
                  src={`https://flagcdn.com/16x12/${code.toLowerCase()}.png`}
                  alt={code}
                  className="inline-block"
                />
              ))}
            </div>
          ) : "isNetwork" in item ? (
            <div className="flex gap-4">
              {(item.value ?? []).map((network: NetworkType) => (
                <img
                  key={network.id}
                  src={`https://image.tmdb.org/t/p/w92${network.logo_path}`}
                  alt={network.name}
                  title={network.name}
                  className="h-6 object-contain bg-white p-1 rounded"
                />
              ))}
            </div>
          ) : (
            <p>{item.value ?? "N/A"}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TvImfomation;
