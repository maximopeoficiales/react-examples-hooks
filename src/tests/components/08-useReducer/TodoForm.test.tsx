import { shallow } from "enzyme";
import React, { ChangeEvent } from "react";
import TodoForm from "../../../components/08-useReducer/TodoForm/TodoForm";
import { Todo } from "../../../components/08-useReducer/todoReducer";

describe("Pruebas en TodoForm", () => {
  const addTodo = jest.fn();

  const wrapper = shallow(<TodoForm addTodo={addTodo} />);

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("No debe de llamar el addTodo", () => {
    const formSubmit: any = wrapper.find("form").prop("onSubmit");

    expect(addTodo).toHaveBeenCalledTimes(0);
  });
  test("debe de llamar la funcion addTodo", () => {
    const value = "nueva descripcion";
    const event: any = {
      target: {
        name: "description",
        value,
      },
    };
    wrapper.find("input").simulate("change", event);

    // console.log(wrapper.find("input").html());
    // se ejecuta el submit
    const formSubmit: any = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(addTodo).toHaveBeenCalledTimes(1);
    // se espera que se llame esta funcion con cualquier objecto como parametro
    expect(addTodo).toHaveBeenCalledWith(expect.any(Object));
    // se espera que la funciona reciba como parametro un todo
    expect(addTodo).toHaveBeenCalledWith({
      id: expect.any(String),
      desc: value,
      done: false,
    });

    // se espera que se hallan reseteado las propiedades
    expect(wrapper.find("input").prop("value")).toHaveLength(0);
  });
});
