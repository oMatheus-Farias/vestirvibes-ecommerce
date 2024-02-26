import { render, screen } from "@testing-library/react";
import Footer from "./footer.component";
import "@testing-library/jest-dom";

describe("Footer", () => {
  it("should correct render", () => {
    render(<Footer />);

    expect(
      screen.getByText(
        /Copyright © 2024 | Vestir Vibes - Todos os direitos reservados/i
      )
    ).toBeInTheDocument();
  });
});
