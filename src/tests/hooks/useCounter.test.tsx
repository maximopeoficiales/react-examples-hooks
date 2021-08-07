import React from "react";
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Pruebas en useCounter.tsx", () => {
  test("debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter());
    // console.log(result.current);
    expect(result.current.counter).toBe(200);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });
  test("debe tener el counter en 100", () => {
    const number = 100;
    const { result } = renderHook(() => useCounter(number));
    // console.log(result.current);
    expect(result.current.counter).toBe(number);
  });
  test("debe aumentar el counter en 1", () => {
    const number = 100;
    const { result } = renderHook(() => useCounter(number));
    const { increment } = result.current;
    // en el act se puede llamar funciones de los custom hooks
    act(() => {
      increment(1);
    });
    const { counter } = result.current;
    expect(counter).toBe(number + 1);
  });
  test("debe decrementar el counter en 1", () => {
    const number = 100;
    const { result } = renderHook(() => useCounter(number));
    const { decrement } = result.current;
    act(() => {
      decrement(1);
    });
    
    const { counter } = result.current;
    expect(counter).toBe(number - 1);
  });

  test("debe resetear el counter a su valor por defecto 100", () => {
    const number = 100;
    const { result } = renderHook(() => useCounter(number));
    const { increment, reset } = result.current;
    act(() => {
      increment(1);
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(number);
  });
});
