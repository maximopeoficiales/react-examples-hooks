import { shallow } from "enzyme";
import React from "react";
import RealExampleRef from "../../../../components/04-useRef/RealExampleRef/RealExampleRef";

describe("Pruebas en RealExampleReft", () => {
  let wrapper = shallow(<RealExampleRef />);
  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).toBeFalsy();
  });

  test("debe mostrarse el componente <MultipleCustomHooks/>", () => {
    // const wrapper = shallow(<RealExampleRef />);
    let buttonHidden = wrapper.find("button");
    buttonHidden.simulate("click");
    console.log(wrapper.find("MultipleCustomHooks").html());
    expect(wrapper.find("MultipleCustomHooks").exists()).toBeTruthy();
  });
});
