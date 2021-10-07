import React from "react";

export const useFetch = (url: string, options: object) => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                setResponse(json);
            } catch (error: any) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    return { response, error };
};
