import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { AppRouterContextProviderMock } from "providers/mockRouter";
import Providers from "providers/provider";
import { server } from "mocks/server";
import Page from "./page";

const push = jest.fn();

const context = describe;

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});
beforeEach(() => {
  render(
    <AppRouterContextProviderMock router={{ push }}>
      <Providers>
        <Page />
      </Providers>
    </AppRouterContextProviderMock>,
  );
});

const init = async () => {
  const $id = await screen.findByPlaceholderText("ID");
  const $password = await screen.findByPlaceholderText("PASSWORD");
  const $findAccount = await screen.findByText("find ID/Password");
  const $signIn = await screen.findByTestId("signIn");
  const $signUp = await screen.findByTestId("signUp");
  const $failSignIn = await screen.findByTestId("failSignIn");

  await userEvent.clear($id);
  await userEvent.clear($password);

  return {
    $id,
    $password,
    $findAccount,
    $signIn,
    $signUp,
    $failSignIn,
  };
};

describe("로그인 페이지", () => {
  context("렌더링", () => {
    it("1. 컴포넌트 확인", async () => {
      const { $id, $password, $findAccount, $signIn, $signUp } = await init();

      expect($id).toBeInTheDocument();
      expect($password).toBeInTheDocument();
      expect($findAccount).toBeInTheDocument();
      expect($signUp).toBeInTheDocument();
      expect($signIn).toBeDisabled();
    });
  });

  context("계정 입력", () => {
    it("2. 정상 입력", async () => {
      const { $id, $password, $signIn } = await init();

      await userEvent.type($id, "test");
      await userEvent.type($password, "1234");
      await userEvent.click($signIn);

      await waitFor(() => {
        // 새로운 페이지로의 리다이렉션 확인
        expect(push).toHaveBeenCalledTimes(1);
      });
    });

    it("3. 비밀번호 오류", async () => {
      const { $id, $password, $signIn, $failSignIn } = await init();

      await userEvent.type($id, "test");
      await userEvent.type($password, "123");
      await userEvent.click($signIn);

      await waitFor(() => {
        // 새로운 페이지로의 리다이렉션 확인
        expect($failSignIn).toHaveTextContent("id or password error");
      });
    });
  });
});
