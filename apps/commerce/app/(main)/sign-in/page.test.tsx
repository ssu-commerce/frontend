import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { AppRouterContextProviderMock } from "providers/mockRouter";
import Providers from "../../../providers";
import { server } from "../../../mocks/server";
import Page from "./page";

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

describe("로그인 페이지", () => {
  it("1. 잘 그려졌는지 테스트합니다.", async () => {
    const push = jest.fn();

    render(
      <AppRouterContextProviderMock router={{ push }}>
        <Providers>
          <Page />
        </Providers>
      </AppRouterContextProviderMock>,
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
    const push = jest.fn();

    render(
      <AppRouterContextProviderMock router={{ push }}>
        <Providers>
          <Page />
        </Providers>
      </AppRouterContextProviderMock>,
    );

    const id = await screen.findByPlaceholderText("ID");
    const password = await screen.findByPlaceholderText("PASSWORD");
    const signIn = await screen.findByTestId("signIn");

    await userEvent.type(id, "test");
    await userEvent.type(password, "1234");
    await userEvent.click(signIn);

    await waitFor(() => {
      // 새로운 페이지로의 리다이렉션 확인
      expect(push).toHaveBeenCalledTimes(1);
    });
  });
});
