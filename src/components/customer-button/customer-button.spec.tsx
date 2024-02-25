import { render } from "@testing-library/react";
import CustomerButton from "./customer-button.component";
import { FaGoogle } from "react-icons/fa6";

describe("Customer Button", () => {
  it("should render with correct children and icon", () => {
    const { getByText, getByTestId } = render(
      <CustomerButton
        color="#000"
        icon={<FaGoogle data-testid="custom-icon" />}
        children="Lorem ipsum"
      ></CustomerButton>
    );

    getByText("Lorem ipsum");
    getByTestId("custom-icon");
  });
});
