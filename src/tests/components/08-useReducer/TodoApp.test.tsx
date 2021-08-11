import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import React from "react";
import TodoApp from "../../../components/08-useReducer/TodoApp/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en TodoApp", () => {
  Storage.prototype.setItem = jest.fn();
  const wrapper = shallow(<TodoApp />);
  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de agregar un todo", () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      let addTodo: any = wrapper.find("TodoForm").prop("addTodo");
      addTodo(demoTodos[0]);
      addTodo(demoTodos[1]);
    });

    expect(wrapper.find("h1").text().trim()).toBe("TodoApp 2");
    // se agregaron dos todos por lo que se espera que se halla llamado el localstorage 2 veces
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("debe eliminar un todo", () => {
    let addTodo: any = wrapper.find("TodoForm").prop("addTodo");
    let deleteTodo: any = wrapper.find("TodoList").prop("deleteTodo");
    addTodo(demoTodos[0]);
    deleteTodo(demoTodos[0]);
    expect(wrapper.find("h1").text().trim()).toBe("TodoApp 0");
  });
});
