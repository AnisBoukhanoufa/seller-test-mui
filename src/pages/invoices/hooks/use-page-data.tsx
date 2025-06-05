import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { getValidPagination, queryToFilter } from "utils/functions";
import { isValidPageData } from "utils/validator";

const useListData = (queryFilter, getData) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const [paginationModel, setPaginationModel] = useState(
    getValidPagination(searchParams.get("pageSize"), searchParams.get("page"))
  );

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (!isFirstRender.current) {
      setPaginationModel((prevVal) => ({
        pageSize: prevVal.pageSize,
        page: 0,
      }));
    } else {
      isFirstRender.current = false;
    }
  }, [JSON.stringify(queryFilter)]);

  useEffect(() => {
    if (
      !isValidPageData(searchParams.get("pageSize"), searchParams.get("page"))
    )
      setSearchParams((prevVal) => {
        return {
          ...Object.fromEntries(Array.from(prevVal.entries())),
          ...getValidPagination(
            searchParams.get("pageSize"),
            searchParams.get("page")
          ),
        };
      });
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    const requestData = async () => {
      try {
        if (
          isValidPageData(
            searchParams.get("pageSize"),
            searchParams.get("page")
          )
        ) {
          const response = await getData(
            queryToFilter(Object.fromEntries(searchParams.entries())),
            dispatch
          );
          if (!searchParams.get("type") && response.type) {
            setSearchParams((prevVal) => {
              return {
                ...Object.fromEntries(Array.from(prevVal.entries())),
                type: response.type,
              };
            });
          }
        }
      } catch (err) {
        throw new Error("error fetching data");
      }
    };
    requestData();
  }, [searchParams, dispatch, setSearchParams, getData]);

  return {
    paginationModel,
    setPaginationModel,
  };
};

export default useListData;
