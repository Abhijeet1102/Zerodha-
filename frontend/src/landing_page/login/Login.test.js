import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

jest.mock("react-router-dom", () => ({
  Link: ({ children }) => <a>{children}</a>,
}));

describe("Login Component Tests", () => {
  test("renders Login component and inputs", () => {
    render(<Login />);

    // Verify main headings exist
    expect(screen.getByText(/Login to Zerodha/i)).toBeInTheDocument();

    // Verify form fields exist
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    // Verify submit button exists
    expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
  });
});
