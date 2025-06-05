import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { EnumDisplayMode } from "statics/enums";
import { queryToFilter } from "utils/functions";
import { getValidPagination, isValidPageData } from "./functions";

const useListData = (queryFilter, getData) => {
  const numberOfCardsToShow = 50;
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const displayMode =
    useSelector((state: any) => state.productAffiliateSeller.displayMode) ||
    EnumDisplayMode.cards;

  const [paginationModel, setPaginationModel] = useState(
    getValidPagination(
      searchParams.get("pageSize"),
      searchParams.get("page"),
      displayMode
    )
  );

  useEffect(() => {
    if (
      displayMode === EnumDisplayMode.cards &&
      Number(searchParams.get("pageSize") || 0) !== numberOfCardsToShow
    ) {
      const pagination = {
        page: Math.floor(
          (paginationModel.page * paginationModel.pageSize) /
            numberOfCardsToShow
        ),
        pageSize: 50,
      };
      setPaginationModel(pagination);
      setSearchParams((prevVal) => {
        return {
          ...Object.fromEntries(Array.from(prevVal.entries())),
          ...pagination,
        };
      });
    }
  }, [displayMode]);

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
      !isValidPageData(
        searchParams.get("pageSize"),
        searchParams.get("page"),
        displayMode
      )
    )
      setSearchParams((prevVal) => {
        return {
          ...Object.fromEntries(Array.from(prevVal.entries())),
          ...getValidPagination(
            searchParams.get("pageSize"),
            searchParams.get("page"),
            displayMode
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
            searchParams.get("page"),
            displayMode
          )
        ) {
          await getData(
            queryToFilter(Object.fromEntries(searchParams.entries())),
            dispatch
          );
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
