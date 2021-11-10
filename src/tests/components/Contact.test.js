import { act, render } from "@testing-library/react";
import { mount } from "enzyme";
import { Contact } from "./../../components/Contact";

describe("Pruebas en <Contact />", () => {
  const wrapper = mount(<Contact />);

  test("Debe de mostrarse corrctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar error si no se pasa un email", () => {
    act(() => {
      render(<Contact />, wrapper);
    });
    
    expect(wrapper.find("p").at(2).text()).toEqual("Error");
  });
});
