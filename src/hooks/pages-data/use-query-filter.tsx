import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";

const useQueryFilter = (initValue = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  // Initialize queryFilter by removing unwanted parameters
  const [queryFilter, setQueryFilter] = useState(() => ({
    ...Object.fromEntries(
      Array.from(searchParams.entries()).filter(
        ([key]) => key !== "page" && key !== "pageSize"
      )
    ),
  }));

  // Sync queryFilter with URL searchParams
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      setQueryFilter({
        ...queryFilter,
        ...initValue,
      });
    }
  }, []);

  // Sync queryFilter with URL searchParams
  const isFirstRender = useRef(true); // Track if it's the first render

  useEffect(() => {
    const filteredParams = Object.fromEntries(
      Array.from(searchParams.entries()).filter(
        ([key]) => key === "page" || key === "pageSize"
      )
    );
    setSearchParams(
      {
        ...filteredParams,
        ...queryFilter,
        ...(isFirstRender.current ? {} : { page: 0 }),
      },
      { replace: true }
    );
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, [JSON.stringify(queryFilter)]);

  return {
    queryFilter,
    setQueryFilter,
  };
};

export default useQueryFilter;
