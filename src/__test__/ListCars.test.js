import { render, screen } from "@testing-library/react";
import ListCarsPage from "../../src/page/List Cars/listCarsPage";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../redux/store";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

describe("Unit Testing Halaman List Cars", () => {
  test("render Komponen Sample", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ListCarsPage />
        </BrowserRouter>
      </Provider>
    );
    const testButtonAddCar = screen.getByTestId("ButtonAddCar");
    const testButtonFilterCar = screen.getByTestId("ButtonFilterCategory");

    expect(testButtonAddCar).toBeInTheDocument();
    expect(testButtonFilterCar).toBeInTheDocument();
  });
});
