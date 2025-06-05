import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useSingleFetch = (id: any, getData: any) => {
  const dispatch = useDispatch();
  const [singleData, setSingleData] = useState({});
  const [notFound, setNotFound] = useState(false);

  const fetchSingleData = useCallback(async () => {
    try {
      const response = await getData(id, dispatch);
      setSingleData(response._doc);
    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        setNotFound(true);
      }
    }
  }, []);

  useEffect(() => {
    fetchSingleData();
  }, []);

  return { singleData, setSingleData, notFound, fetchSingleData };
};

export default useSingleFetch;
