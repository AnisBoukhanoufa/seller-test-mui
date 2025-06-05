import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ErrorContent from "./error-content";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  const location = useLocation(); // Get current route

  // Reset error state when the route changes
  useEffect(() => {
    setHasError(false);
  }, [location.pathname]);

  return hasError ? (
    <ErrorContent />
  ) : (
    <ErrorCatcher setHasError={setHasError}>{children}</ErrorCatcher>
  );
};

// Class component to catch errors
class ErrorCatcher extends React.Component {
  componentDidCatch(error, errorInfo) {
    // console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.props.setHasError(true);
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
