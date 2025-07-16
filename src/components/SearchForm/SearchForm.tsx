/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import FormField from "../SearchForm/FormField";
import MediaTypeInput from "./FormInput/MediaTypeInput";
import GenresInput from "./FormInput/GenresInput";
import RatingInput from "./FormInput/RatingInput";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const SearchForm = ({ setvalueFormSearch }: any) => {
  const [searchParams] = useSearchParams();
  const mediaType = searchParams.get("mediatype") || "movie";
  const { control, watch, reset } = useForm({
    defaultValues: {
      mediaType: ["movie", "tv"].includes(mediaType) ? mediaType : "movie",
      genres: [],
      rating: "all",
      page: 1,
    },
  });
  const dataChange = watch();

  useEffect(() => {
    setvalueFormSearch(dataChange);
  }, [JSON.stringify(dataChange)]);

  useEffect(() => {
    reset((prev) => ({
      ...prev,
      mediaType,
    }));
  }, [mediaType, reset]);
  return (
    <div>
      <form>
        <FormField
          name={"mediaType"}
          label={"MediaType"}
          control={control}
          Component={MediaTypeInput}
        />
        <FormField
          name={"genres"}
          label={"Genres"}
          control={control}
          Component={GenresInput}
        />
        <FormField
          name={"rating"}
          label={"Ratings"}
          control={control}
          Component={RatingInput}
        />
      </form>
    </div>
  );
};

export default SearchForm;
