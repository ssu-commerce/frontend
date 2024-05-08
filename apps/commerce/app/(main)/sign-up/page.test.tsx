import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { AppRouterContextProviderMock } from "providers/mockRouter";
import Providers from "providers/provider";
import { server } from "mocks/server";
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
beforeEach(async () => {
  render(
    <AppRouterContextProviderMock router={{ push: jest.fn() }}>
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

  userEvent.clear($name);
  userEvent.clear($id);
  userEvent.clear($password);
  userEvent.clear($confirm);

  return {
    $name,
    $id,
    $password,
    $confirm,
    $signUp,
    $failSignUp,
  };
};

describe("회원가입 페이지", async () => {
  it("1. 잘 그려졌는지 테스트합니다.", async () => {
    const { $name, $id, $password, $confirm, $signUp } = await init();

    expect($name).toBeInTheDocument();
    expect($id).toBeInTheDocument();
    expect($password).toBeInTheDocument();
    expect($confirm).toBeInTheDocument();
    expect($signUp).toBeDisabled();
  });

  it("2. 회원가입의 정상 동작을 테스트합니다.", async () => {
    const { $name, $id, $password, $confirm, $signUp } = await init();

    await userEvent.type($name, "name");
    await userEvent.type($id, "id");
    await userEvent.type($password, "1234");
    await userEvent.type($confirm, "1234");
    await userEvent.click($signUp);

    await waitFor(() => {
      // 새로운 페이지로의 리다이렉션 확인
      expect(jest.fn()).toHaveBeenCalledTimes(1);
    });
  });

  it("3. 회원가입의 실패 동작을 테스트합니다.", async () => {
    const { $name, $id, $password, $confirm, $signUp, $failSignUp } =
      await init();

    expect($failSignUp).toHaveTextContent("");

    await userEvent.type($name, "name");
    await userEvent.type($id, "duplicate");
    await userEvent.type($password, "1234");
    await userEvent.type($confirm, "123");
    await userEvent.click($signUp);

    await waitFor(() => {
      // 새로운 페이지로의 리다이렉션 확인
      expect($failSignUp).toHaveTextContent("duplicate name");
    });

    await userEvent.type($id, "notDuplicate");
    await userEvent.click($signUp);

    await waitFor(() => {
      // 새로운 페이지로의 리다이렉션 확인
      expect($failSignUp).toHaveTextContent("not match password");
    });
  });
});
