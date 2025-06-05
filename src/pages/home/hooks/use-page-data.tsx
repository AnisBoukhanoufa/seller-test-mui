import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  updateStatisticPayment,
  updateStatisticStatusCount,
  updateStatisticType,
  updateStatisticWillsReceived,
} from "state/statistics-redux-";
import { queryToFilter } from "utils/functions";
import { apiBaseUrl } from "utils/request-methods";

const useStatisticData = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  // References to store the active EventSource and timer.
  const eventSourceRef = useRef(null);
  const timerRef = useRef(null);

  // This function initializes and returns an EventSource instance.
  const getDataSSE = (query) => {
    const url = `${apiBaseUrl}/statistic/general?${query}`;
    return new EventSource(url, { withCredentials: true });
  };

  const fetchPageData = () => {
    // Ensure any existing connection or timer is cleared.
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // Build the query string from searchParams.
    const query = queryToFilter(Object.fromEntries(searchParams.entries()));

    // Initialize the SSE connection.
    const eventSource = getDataSSE(query);
    eventSourceRef.current = eventSource;

    // Track the number of messages received.
    let messagesReceived = 0;

    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        switch (messagesReceived) {
          case 0:
            dispatch(updateStatisticType(data));
            if (!searchParams.get("type") && data.type) {
              setSearchParams((prev) => ({
                ...Object.fromEntries(prev.entries()),
                type: data.type,
              }),{ replace: true });
            }
            break;
          case 1:
            dispatch(updateStatisticStatusCount(data));
            break;
          case 2:
            dispatch(updateStatisticPayment(data));
            break;
          case 3:
            dispatch(updateStatisticWillsReceived(data));
            break;
          default:
            console.log("error");
        }
      } catch (err) {
        console.error("Error parsing SSE data:", err);
      }
      messagesReceived++;

      if (messagesReceived >= 4) {
        eventSource.close();
        eventSourceRef.current = null;
        // Wait 5 seconds before starting a new connection.
        timerRef.current = setTimeout(fetchPageData, 5000);
      }
    };

    eventSource.onerror = (err) => {
      eventSource.close();
      eventSourceRef.current = null;
    };
  };

  useEffect(() => {
    // Handle tab visibility changes to pause/resume polling.
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        stopPolling();
      } else if (document.visibilityState === "visible") {
        stopPolling();
        startPolling();
      }
    };

    const startPolling = () => {
      if (!timerRef.current && !eventSourceRef.current) {
        fetchPageData();
      }
    };

    const stopPolling = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
    };

    startPolling();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      stopPolling();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [searchParams]);
};

export default useStatisticData;
