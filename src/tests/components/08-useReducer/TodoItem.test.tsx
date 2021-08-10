import { shallow } from "enzyme";
import React from "react";
import TodoItem from "../../../components/08-useReducer/TodoItem/TodoItem";
import { newTodo } from "../../fixtures/demoTodos";

describe("Pruebas en TodoItem.tsx", () => {
  const index = 1;
  const deleteTodo = jest.fn();
  const toggleTodo = jest.fn();
  const wrapper = shallow(
    <TodoItem
      deleteTodo={deleteTodo}
      toggleTodo={toggleTodo}
      i={index}
      todo={newTodo}
    />
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de llamar a la funcion handleDelete", () => {
    // simulo interaccion con el boton delete
    wrapper.find("button").simulate("click");
    expect(deleteTodo).toHaveBeenCalled();
    expect(deleteTodo).toHaveBeenCalledTimes(1);
    expect(deleteTodo).toHaveBeenCalledWith(newTodo);
  });
  test("debe de llamar a la funcion handleToggle", () => {
    // simulo interaccion con el parrafo
    wrapper.find("p").simulate("click");
    expect(toggleTodo).toHaveBeenCalled();
    expect(toggleTodo).toHaveBeenCalledTimes(1);
    expect(toggleTodo).toHaveBeenCalledWith(newTodo);
  });
  test("debe mostrar el texto correctamente", () => {
    let texto = wrapper.find("b");
    // console.log(texto.html());
    expect(texto.text()).toEqual(`${index + 1}. ${newTodo.desc}`);
  });

  test("debe mostrar la class complete cuando todo.done = true", () => {
    expect(wrapper.find("p").hasClass("complete")).toBeTruthy();
    console.log(wrapper.html());
  });
});
