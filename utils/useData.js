import useSWR from "swr";

const useData = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`http://localhost:5000/user/`, fetcher, {
    refreshInterval: 1,
    refreshWhenHidden: true,
    refreshWhenOffline: true,
  });

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useData;
