import { render, fireEvent } from "@testing-library/react";
import CustomerInput from "./customer-input.component";

describe("Customer Input", () => {
  it("should render with correct placeholder", () => {
    const { getByPlaceholderText } = render(
      <CustomerInput type="text" name="name" placeholder="lorem" />
    );

    getByPlaceholderText("lorem");
  });

  it("should change value when user types", () => {
    const { getByPlaceholderText, getByDisplayValue } = render(
      <CustomerInput type="text" name="name" placeholder="lorem" />
    );

    const input = getByPlaceholderText("lorem");

    fireEvent.change(input, { target: { value: "Dolor Sit" } });

    getByDisplayValue("Dolor Sit");
  });
});
