import { useEffect, useRef, useState } from "react";

interface UseFecthData {
    data: any,
    loading: boolean,
    error: any
}
export const useFetch = (url: string) => {
    // uso de useRef
    const isMounted = useRef(true);
    const [state, setState] = useState(
        {
            data: null, loading: true, error: null
        } as UseFecthData
    );

    useEffect(() => {

        // cuando se desmonte el componente la referencia estara en false
        return () => {

            // isMounted.current = false
        }
    }, []);

    useEffect(() => {
        setState({ loading: true, data: null, error: null });

        (async () => {
            // if (isMounted.current) {
            let data = await (await fetch(url)).json();
            setState({ loading: false, data, error: null });
            // }else{
            // console.log("El useState no se esta ejecutando ");

            // }
        })()
    }, [url])
    return { state };
}
