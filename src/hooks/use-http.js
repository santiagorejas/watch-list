import { useState } from "react";

const useHttp = (requestConfig, applyData) => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method,
        headers: requestConfig.headers,
        body: requestConfig.body,
      });

      if (!response.ok) {
        throw new Error("An error has ocurred");
      }

      const responseData = await response.json();

      applyData(responseData);
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
