import { mount, shallow } from "enzyme";
import React from "react";
import HomePage from "../../../components/09-useContext/HomePage/HomePage";
import {
  User,
  UserContext,
} from "../../../components/09-useContext/UserContext";

describe("Pruebas en HomeScreen", () => {
  // mount monta el componente con todos sus hijos
  const user: User = {
    id: 1,
    age: 33,
    name: "jorge",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user, setUser: () => {} }}>
      <HomePage />
    </UserContext.Provider>
  );

  test("debe de mostrarse correctament", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
