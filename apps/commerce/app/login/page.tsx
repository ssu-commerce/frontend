"use client";

import { Button, SizeKey, TextField, VariantKey } from "@sc/ui";
import * as S from "./login.styles";
import { css } from "@emotion/react";

export const LoginPage = () => {
  const handleSubmitLogin = () => {};

  return (
    <S.LoginArea>
      <S.LoginForm onSubmit={handleSubmitLogin}>
        <S.TextField>
          <TextField type="id" placeholder="ID" size={SizeKey.LG} />
          <TextField type="password" placeholder="PASSWORD" size={SizeKey.LG} />
          <Button
            href="login/find"
            variant={VariantKey.Text}
            css={css`
              width: fit-content;
              margin-left: auto;
            `}
          >
            find ID/Password
          </Button>
        </S.TextField>
        <Button
          type="submit"
          css={css`
            width: 300px;
            margin-top: 24px;
          `}
          size={SizeKey.LG}
        >
          Login
        </Button>
      </S.LoginForm>
    </S.LoginArea>
  );
};

export default LoginPage;
