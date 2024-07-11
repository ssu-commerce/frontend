import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { AppRouterContextProviderMock } from "providers/mockRouter";
import Providers from "providers/testProvider";
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
  const $name = await screen.findByPlaceholderText("NAME");
  const $id = await screen.findByPlaceholderText("ID");
  const $password = await screen.findByPlaceholderText("PASSWORD");
  const $confirm = await screen.findByPlaceholderText("CONFIRM PASSWORD");
  const $signUp = await screen.findByTestId("signUp");
  const $failSignUp = await screen.findByTestId("failSignUp");

  await userEvent.clear($name);
  await userEvent.clear($id);
  await userEvent.clear($password);
  await userEvent.clear($confirm);

  return {
    $name,
    $id,
    $password,
    $confirm,
    $signUp,
    $failSignUp,
  };
};

describe("회원가입 페이지", () => {
  context("렌더링", () => {
    it("1. 컴포넌트 확인", async () => {
      const { $name, $id, $password, $confirm, $signUp } = await init();

      expect($name).toBeInTheDocument();
      expect($id).toBeInTheDocument();
      expect($password).toBeInTheDocument();
      expect($confirm).toBeInTheDocument();
      expect($signUp).toBeDisabled();
    });
  });

  context("계정 입력", () => {
    it("2. 정상 입력", async () => {
      const { $name, $id, $password, $confirm, $signUp } = await init();

      await userEvent.type($name, "name");
      await userEvent.type($id, "id");
      await userEvent.type($password, "1234");
      await userEvent.type($confirm, "1234");
      await userEvent.click($signUp);

      await waitFor(() => {
        expect(push).toHaveBeenCalledTimes(1);
      });
    });

    it("3. 중복 계정 입력", async () => {
      const { $name, $id, $password, $confirm, $signUp, $failSignUp } =
        await init();

      expect($failSignUp).toHaveTextContent("");

      await userEvent.type($name, "name");
      await userEvent.type($id, "duplicate");
      await userEvent.type($password, "1234");
      await userEvent.type($confirm, "123");
      await userEvent.click($signUp);

      await waitFor(() => {
        expect($failSignUp).toHaveTextContent("duplicate name");
      });

      await userEvent.type($id, "notDuplicate");
      await userEvent.click($signUp);

      await waitFor(() => {
        expect($failSignUp).toHaveTextContent("not match password");
      });
    });
  });
});
