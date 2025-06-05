// useUserStatusPolling.js
import { useEffect, useRef } from "react";
import { userStatus } from "state/api-calls/seller-calls";

const useUserStatusPolling = (employee) => {
  const intervalRef = useRef(null);

  useEffect(() => {
    const startInterval = () => {
      if (!intervalRef.current && employee) {
        intervalRef.current = setInterval(userStatus, 120000); // Adjust the interval time as needed
      }
    };

    const stopInterval = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const handleVisibilityChange = () => {
      const visibilityState = document.visibilityState;
      if (visibilityState === "hidden") {
        stopInterval(); // Stop the interval when the tab is not visible
      } else if (visibilityState === "visible") {
        userStatus(); // Trigger the status check immediately when the tab becomes visible again
        startInterval(); // Restart the interval
      }
    };

    if (employee) {
      document.addEventListener("visibilitychange", handleVisibilityChange);
      startInterval(); // Start the interval when the component mounts and employee exists
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      stopInterval(); // Clean up by stopping the interval when the component unmounts or dependencies change
    };
  }, [userStatus, employee]); // Add userStatus as a dependency
};

export default useUserStatusPolling;
