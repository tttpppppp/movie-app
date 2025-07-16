/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

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

  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!enabled || !url) return;

    setIsLoading(true);

    fetch(`${import.meta.env.VITE_HOST}/${url}`, {
      method,
      headers: {
        ...DEFAULT_HEADER,
        ...headers,
      },
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("Failed to fetch");
        const json = await response.json();
        setData(json);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, method, JSON.stringify(headers), enabled]);

  return { data, isLoading, error };
}
