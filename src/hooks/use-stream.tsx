import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { queryToFilter } from "utils/functions";

const useStreamPageData = (
  getData: any,
) => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    const startInterval = () => {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          try {
            getData(
              queryToFilter(Object.fromEntries(searchParams.entries())),
              dispatch
            );
          } catch (err) {
            console.error(err);
          }
        }, 5000);
      }
    };

    const stopInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopInterval();
      } else {
        try {
          getData(
            queryToFilter(Object.fromEntries(searchParams.entries())),
            dispatch
          );
        } catch (err) {
          console.error(err);
        }
        startInterval();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    startInterval();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      stopInterval();
    };
  }, [dispatch, getData, searchParams]);
};

export default useStreamPageData;
