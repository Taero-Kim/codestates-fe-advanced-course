import { useEffect, useState } from "react";
import { customAxios } from "../lib/customAxios";

const useFetch = <T>(url: string, params?: unknown) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    customAxios
      .get(url, { params })
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url, params]);

  return { data, loading, error };
};

export default useFetch;
