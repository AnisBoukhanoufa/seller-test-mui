import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getValidPagination, queryToFilter } from "utils/functions";
import { isValidPageData } from "utils/validator";

const useListData = (queryFilter, setQueryFilter, getData) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const [paginationModel, setPaginationModel] = useState(
    getValidPagination(searchParams.get("pageSize"), searchParams.get("page"))
  );

  useEffect(() => {
    if (
      !isValidPageData(searchParams.get("pageSize"), searchParams.get("page"))
    )
      setSearchParams(
        (prevVal) => {
          return {
            ...Object.fromEntries(Array.from(prevVal.entries())),
            ...getValidPagination(
              searchParams.get("pageSize"),
              searchParams.get("page")
            ),
          };
        },
        { replace: true }
      );
  }, [searchParams, setSearchParams]);

  //handle first render type
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      setPaginationModel((prevVal) => ({
        pageSize: prevVal.pageSize,
        page: 0,
      }));
    }
  }, [JSON.stringify(queryFilter)]);

  useEffect(() => {
    const requestData = async () => {
      try {
        if (
          isValidPageData(
            searchParams.get("pageSize"),
            searchParams.get("page")
          )
        ) {
          const data = await getData(
            queryToFilter(Object.fromEntries(searchParams.entries())),
            dispatch
          );
          if (!searchParams.get("type") && data.type) {
            setQueryFilter((prevValue) => ({ ...prevValue, type: data?.type }));
            setSearchParams(
              (prevVal) => {
                return {
                  ...Object.fromEntries(Array.from(prevVal.entries())),
                  type: data?.type,
                };
              },
              { replace: true }
            );
            isFirstRender.current = false;
          }
        }
      } catch (err) {
        throw new Error("error fetching data");
      }
    };
    requestData();
  }, [searchParams, dispatch, setSearchParams, getData, setQueryFilter]);
  return { paginationModel, setPaginationModel };
};

export default useListData;
