import { act } from "@testing-library/react";
import { mount } from "enzyme";
import React from "react";
import LoginPage from "../../../components/09-useContext/LoginPage/LoginPage";
import {
  User,
  UserContext,
} from "../../../components/09-useContext/UserContext";

describe("Pruebas en LoginPage", () => {
  // mount monta el componente con todos sus hijos
  const setUser = jest.fn();
  const user: User = {
    id: 1,
    age: 33,
    name: "jorge",
  };
  const newUser: User = {
    id: 2323,
    name: "maximo junior",
    age: 22,
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user: {}, setUser }}>
      <LoginPage />
    </UserContext.Provider>
  );

  test("debe de mostrarse correctament", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de ejecutar el setUser con el argumento esperado", () => {
    wrapper.find("button").simulate("click");
    expect(setUser).toBeCalledTimes(1);
    expect(setUser).toHaveBeenCalledWith(newUser);
    // console.log(wrapper.find("pre").html());
    // console.log(wrapper.find("pre").html());
  });
});
