import { mount } from "enzyme";
import React from "react";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import {
  User,
  UserContext,
} from "../../../components/09-useContext/UserContext";

describe("Pruebas en LoginPage", () => {
  // mount monta el componente con todos sus hijos
  const user: User = {
    id: 1,
    age: 33,
    name: "jorge",
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user, setUser: () => {} }}>
      <AppRouter />
    </UserContext.Provider>
  );
  test("debe de mostrarse correctament", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
