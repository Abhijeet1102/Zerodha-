import React from "react";
import { render, screen } from "@testing-library/react";
import Signup from "./Signup";

jest.mock("react-router-dom", () => ({
  Link: ({ children }) => <a>{children}</a>,
}));

describe("Signup Component Tests", () => {
  test("renders Signup component and inputs", () => {
    render(<Signup />);

    // Verify main headings exist
    expect(screen.getByText(/Signup now/i)).toBeInTheDocument();

    // Verify form fields exist
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();

    // Verify submit button exists
    expect(screen.getByRole("button", { name: /Continue/i })).toBeInTheDocument();
  });
});
