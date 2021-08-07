import { act, renderHook } from "@testing-library/react-hooks";
import React, { ChangeEvent } from "react";
import { useForm } from "../../hooks/useForm";
interface TestForm {
  name: string;
  email: string;
}
describe("Pruebas en useForm.ts", () => {
  const initialForm: TestForm = {
    email: "maximopeoficiales@gmail.com",
    name: "Maximo junior",
  };
  test("debe regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm<TestForm>(initialForm));
    expect(result.current.formValues).toEqual(initialForm);
    expect(typeof result.current.handlerChange).toEqual("function");
    expect(typeof result.current.resetForm).toEqual("function");
  });

  test("debe cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm<TestForm>(initialForm));
    const { handlerChange } = result.current;
    const nombreActualizado = "Maximo Actualizado";
    act(() => {
      const event: any = {
        target: {
          name: "name",
          value: nombreActualizado,
        },
      };
      handlerChange(event);
    });
    const { formValues } = result.current;
    // console.log(formValues);
    expect(formValues.name).not.toBe(initialForm.name);
    expect(formValues).toEqual({ ...initialForm, name: nombreActualizado });
  });
  test("debe resetear los valores del formulario ", () => {
    const { result } = renderHook(() => useForm<TestForm>(initialForm));
    const { handlerChange, resetForm } = result.current;
    act(() => {
      const event: any = {
        target: {
          name: "name",
          value: "Maximo Actualizado",
        },
      };
      //   se actualizo
      handlerChange(event);
      resetForm();
    });
    const { formValues } = result.current;
    // console.log(formValues);
    expect(formValues).toEqual(initialForm);
  });
});
