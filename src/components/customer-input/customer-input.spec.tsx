import { render } from "@testing-library/react";
import CustomerInput from "./customer-input.component";

describe("Customer Input", () => {
  it("should render with correct placeholder", () => {
    const { getByPlaceholderText } = render(
      <CustomerInput type="text" name="name" placeholder="lorem" />
    );

    getByPlaceholderText("lorem");
  });
});
