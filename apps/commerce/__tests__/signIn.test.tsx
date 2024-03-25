import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page from "app/(main)/sign-in/page";
import Providers from "../providers";
import { NextResponse, NextRequest } from "next/server";

describe("1. 로그인 페이지", () => {
  it("1-1. 로그인 입력.", async () => {
    render(
      <Providers>
        <Page />
      </Providers>,
    );

    const idInput = await screen.findByPlaceholderText<HTMLInputElement>("ID");
    const passwordInput =
      await screen.findByPlaceholderText<HTMLInputElement>("ID");
    const findLink = await screen.findByPlaceholderText<HTMLInputElement>("ID");

    expect(idInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    fireEvent.change(idInput, { target: { value: "test" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
  });

  it("1-2. id, password 미입력", async () => {
    render(
      <Providers>
        <Page />
      </Providers>,
    );

    const idInput = await screen.findByPlaceholderText<HTMLInputElement>("ID");
    const passwordInput =
      await screen.findByPlaceholderText<HTMLInputElement>("ID");

    fireEvent.change(idInput, { target: { value: "test" } });

    const signInButton = await screen.findByRole("button", { name: /Sign In/ });
    fireEvent.click(signInButton);
  });
});
