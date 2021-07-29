import { useEffect, useState } from "react";

interface UseFecthData {
    data: any,
    loading: boolean,
    error: any
}
export const useFetch = (url: string) => {
    const [state, setState] = useState(
        {
            data: null, loading: true, error: null
        } as UseFecthData
    );

    useEffect(() => {
        setState({ loading: true, data: null, error: null });

        (async () => {
            let data = await (await fetch(url)).json();
            setState({ loading: false, data, error: null });
        })()
    }, [url])
    return { state };
}
