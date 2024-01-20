"use client";

import { Button, Checkbox, SizeKey, TextField, VariantKey } from "@sc/ui";
import * as S from "./signIn.styles";
import { css } from "@emotion/react";
import { FormEvent } from "react";

export const SignInPage = () => {
  const handleSubmitSignIn = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <S.Container>
      <S.SignInBox>
        <S.Title>Sign In</S.Title>
        <S.SignInForm onSubmit={handleSubmitSignIn}>
          <S.TextBox>
            <TextField
              type="id"
              placeholder="ID"
              size={SizeKey.MD}
              required
              inputProps={{
                autoComplete: "username",
              }}
            />
            <TextField
              type="password"
              placeholder="PASSWORD"
              size={SizeKey.MD}
              required
              inputProps={{ autoComplete: "new-password" }}
            />
          </S.TextBox>
          <S.AddonBox>
            <Checkbox>remember</Checkbox>
            <Button
              href="/sign-find"
              variant={VariantKey.Text}
              css={css`
                width: fit-content;
              `}
            >
              find ID/Password
            </Button>
          </S.AddonBox>
          <Button
            type="submit"
            css={css`
              width: 300px;
              margin-top: 16px;
            `}
            size={SizeKey.LG}
          >
            Sign In
          </Button>
        </S.SignInForm>
        <Button
          href="/sign-up"
          variant={VariantKey.Text}
          fullWidth
          css={css`
            margin-top: 16px;
          `}
        >
          Sign Up
        </Button>
      </S.SignInBox>
    </S.Container>
  );
};

export default SignInPage;
