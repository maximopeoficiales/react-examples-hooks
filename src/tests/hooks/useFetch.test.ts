import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { useFetch } from '../../hooks/useFetch';
describe('Pruebas en useFetch.ts', () => {

    test('debe retornar la info por defecto', () => {
        const { result } = renderHook(() => useFetch("https://www.breakingbadapi.com/api/quotes/1"));
        const { data, error, loading } = result.current.state;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    })

    test('debe retornar la info deseada', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch("https://www.breakingbadapi.com/api/quotes/1"));

        await waitForNextUpdate({ timeout: 3000 });
        const { data, error, loading } = result.current.state;
        console.log(data);

        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });
    test('debe retornar el error', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch("https://www.breakingbadapi.com/api/quote"));
        await waitForNextUpdate({ timeout: 3000 });

        const { data, error, loading } = result.current.state;
        // console.log(result.current.state);

        // console.log(data);

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(typeof error).toBe("string");
    })

})
