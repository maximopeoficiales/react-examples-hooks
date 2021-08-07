import { shallow } from "enzyme";
import React from "react";
import Counter from "../components/01-useState/Counter/Counter";

describe("<Counter />", () => {
  test("debe renderizarse correctamente", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });
});
