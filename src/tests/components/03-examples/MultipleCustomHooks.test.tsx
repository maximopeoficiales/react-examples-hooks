import { shallow } from "enzyme";
import React from "react";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks/MultipleCustomHooks";
import { useCounter } from "../../../hooks/useCounter";
import { UseFecthData, useFetch } from "../../../hooks/useFetch";
// simula comportamientos de los resultados de los hooks
jest.mock("../../../hooks/useCounter");
jest.mock("../../../hooks/useFetch");

describe("Pruebas en MultipleCustomHooks", () => {
  const stateCounter = {
    counter: 1,
    increment: () => {},
    decrement: () => {},
    reset: () => {},
  };

  const state: UseFecthData = {
    data: null,
    loading: true,
    error: null,
  };

  test("debe de mostrarse correctamente", () => {
    (useCounter as jest.Mock).mockReturnValue({ stateCounter });

    (useFetch as jest.Mock).mockReturnValue({ state });
    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test("should debe de mostrar la info", () => {
    // simulo que ya cargo los datos
    (useCounter as jest.Mock).mockReturnValue({ stateCounter });

    (useFetch as jest.Mock).mockReturnValue({
      data: [
        { name: "maximo", birthday: "laksjdlk", img: "asd", status: "safd" },
      ],
      error: null,
      loading: false,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find(".card-title").text().trim()).toBe("maximo");
    expect(wrapper.find("h5").exists()).toBe(false);

    // console.log(wrapper.html());

    // expect(wrapper).toMatchSnapshot();
  });
});
