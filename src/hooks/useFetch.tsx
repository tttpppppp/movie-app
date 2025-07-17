/* eslint-disable react-hooks/exhaustive-deps */
import useSWR from "swr";

const DEFAULT_HEADER = {
  accept: "application/json",
  Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
};

interface UseFetchOptions {
  method?: string;
  headers?: Record<string, string>;
  enabled?: boolean;
}

export default function useFetch<T = unknown>(
  url: string,
  options: UseFetchOptions = {}
) {
  const { method = "GET", headers = {}, enabled = true } = options;

  const fullUrl = `${import.meta.env.VITE_HOST}/${url}`;

  // fetcher với headers hợp lệ
  const fetcher = async (url: string): Promise<T> => {
    const response = await fetch(url, {
      method,
      headers: {
        ...DEFAULT_HEADER,
        ...headers,
      },
    });
    if (!response.ok) throw new Error("Failed to fetch");
    return response.json();
  };

  const shouldFetch = enabled && !!url;

  const { data, error, isLoading } = useSWR<T>(
    shouldFetch ? fullUrl : null,
    fetcher
  );

  return { data, error, isLoading };
}
