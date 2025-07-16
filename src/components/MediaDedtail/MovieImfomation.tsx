/* eslint-disable @typescript-eslint/no-explicit-any */
import { formatCurrency } from "../../lib/utils";

const MovieImfomation = ({ movieInfo }: { movieInfo: any }) => {
  const data = [
    { label: "Original name", value: movieInfo.original_title },
    {
      label: "Original Country",
      value: movieInfo.origin_country,
      isCountry: true,
    },
    { label: "Status", value: movieInfo.status },
    {
      label: "Budget",
      value: movieInfo.budget ? formatCurrency(movieInfo.budget) : "",
    },
    {
      label: "Revenue",
      value: movieInfo.revenue ? formatCurrency(movieInfo.revenue) : "",
    },
  ];

  return (
    <div>
      <div className="flex-1 font-bold text-[1.4vw] mb-4"></div>
      {data.map((item, index) => {
        return (
          <div key={index} className="m-4">
            <p className="font-bold">{item.label}</p>
            {item.isCountry ? (
              <div className="flex gap-2">
                {(item?.value ?? []).map((code: string) => (
                  <img
                    key={code}
                    src={`https://flagcdn.com/16x12/${code.toLowerCase()}.png`}
                    alt={code}
                    className="inline-block"
                  />
                ))}
              </div>
            ) : (
              <p>{item.value}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MovieImfomation;
