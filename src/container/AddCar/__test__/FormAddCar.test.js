import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import FormAddCar from "../FormAddCar";
import store from "../../../redux/store";

describe("Unit Testing Halaman List Cars", () => {
  test("render Komponen Sample", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormAddCar />
        </BrowserRouter>
      </Provider>
    );
    const testFormCarName = screen.getByTestId("label-Name");
    const testFormCarPrice = screen.getByTestId("label-Price");

    expect(testFormCarName).toBeInTheDocument();
    expect(testFormCarPrice).toBeInTheDocument();
  });
});
