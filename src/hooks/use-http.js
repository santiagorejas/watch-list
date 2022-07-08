import { useState, useCallback } from "react";

const useHttp = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : "GET",
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? requestConfig.body : null,
            });

            if (!response.ok) {
                throw new Error("An error has ocurred");
            }

            const responseData = await response.json();

            applyData(responseData);
        } catch (error) {
            setError(error.message || "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {
        isLoading,
        error,
        sendRequest,
    };
};

export default useHttp;
