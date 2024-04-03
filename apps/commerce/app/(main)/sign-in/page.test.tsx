import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import Page from "./page";
import Providers from "../../../providers";
import userEvent from "@testing-library/user-event";
import { server } from "../../../mocks/server";

describe("로그인 페이지", () => {
  it("1. 잘 그려졌는지 테스트합니다.", async () => {
    render(
      <Providers>
        <Page />
      </Providers>,
    );

    const id = await screen.findByPlaceholderText("ID");
    const password = await screen.findByPlaceholderText("PASSWORD");
    const findAccount = await screen.findByText("find ID/Password");
    const signIn = await screen.findByTestId("signIn");
    const signUp = await screen.findByTestId("signUp");

    expect(id).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(findAccount).toBeInTheDocument();
    expect(signUp).toBeInTheDocument();
    expect(signIn).toBeDisabled();
  });

  it("2. 로그인의 정상 동작을 테스트합 니다.", async () => {
    render(
      <Providers>
        <Page />
      </Providers>,
    );

    const id = await screen.findByPlaceholderText("ID");
    const password = await screen.findByPlaceholderText("PASSWORD");
    const signIn = await screen.findByTestId("signIn");

    await userEvent.type(id, "test");
    await userEvent.type(password, "1234");
    await userEvent.click(signIn);

    // API 호출 및 응답 대기
    await waitFor(() => {
      console.log(server.handlers);
      expect(server.handlers).toHaveLength(1); // API 호출 확인
    });

    // 새로운 페이지로의 리다이렉션 확인
    expect(window.location.pathname).toBe("/dashboard");
  });
});
