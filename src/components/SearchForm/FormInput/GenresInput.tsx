/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useWatch } from "react-hook-form";
import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";

interface Genres {
  genres: {
    id: number;
    name: string;
  }[];
}

const GenresInput = ({ control, onChange, value = [] }: any) => {
  const mediaType = useWatch({ name: "mediaType", control });
  const { data } = useFetch<Genres>(`genre/${mediaType}/list`, {
    enabled: !!mediaType,
  });

  useEffect(() => {
    onChange([]);
  }, [mediaType]);
  return (
    <div className="flex gap-1 flex-wrap">
      {(data?.genres || []).map((item) => (
        <p
          key={item.id}
          className={`border py-1 px-2 rounded-lg cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 ${
            value.includes(item.id) ? "bg-black text-white" : ""
          }`}
          onClick={() => {
            let newValue = [...value];
            if (value.includes(item.id)) {
              newValue = newValue.filter((g) => g !== item.id);
            } else {
              newValue = [...value, item.id];
            }
            onChange(newValue);
          }}
        >
          {item.name}
        </p>
      ))}
    </div>
  );
};

export default GenresInput;
