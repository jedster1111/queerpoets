import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Queer Poetry header", () => {
  render(<App />);
  const Header = screen.getByText(/Queer Poetry/i);
  expect(Header).toBeInTheDocument();
});
