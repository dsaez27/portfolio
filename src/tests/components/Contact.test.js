import { shallow } from "enzyme";
import { Contact } from "./../../components/Contact";

const wrapper = shallow(<Contact />);

describe("Pruebas en <Contact />", () => {
  test("Debe de mostrarse corrctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper.find('input[name="email"]')).toBeTruthy();
    expect(wrapper.find('input[name="password"]')).toBeTruthy();
    expect(wrapper.find('button[type="submit"]')).toBeTruthy();
  });

  test("Debe de mostrar error si no se pasa un email", () => {
    wrapper.find('input[type="text"]').simulate("change", {
      target: { name: "email", value: "teste@teste.com" },
    });
    wrapper.find('input[type="password"]').simulate("change", {
      target: { name: "password", value: "123123" },
    });
    wrapper.find("button").simulate("click");
  });

  test("Debe de mostrar error si no se pasa un password", () => {
    wrapper.find('input[type="text"]').simulate("change", {
      target: { name: "email", value: "dsdfsd@sdsa.com" },
    });
    wrapper.find('input[type="password"]').simulate("change", {
      target: { name: "password", value: "" },
    });
    wrapper.find("button").simulate("click");
    
});
