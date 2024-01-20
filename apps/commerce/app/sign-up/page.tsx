"use client";

import { Button, SizeKey, TextField, VariantKey } from "@sc/ui";
import * as S from "./signUp.styles";
import { css } from "@emotion/react";
import { FormEvent } from "react";

export const SignUpPage = () => {
  const handleSubmitSignUp = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <S.Container>
      <S.SignUpBox>
        <S.Title>Sign Up</S.Title>
        <S.SignUpForm onSubmit={handleSubmitSignUp}>
          <S.TextBox>
            <S.Label>
              ID
              <TextField
                type="id"
                placeholder="ID"
                size={SizeKey.MD}
                required
                inputProps={{ autoComplete: "none" }}
              />
            </S.Label>
            <S.Label>
              Password
              <TextField
                type="password"
                placeholder="PASSWORD"
                size={SizeKey.MD}
                required
                inputProps={{
                  autoComplete: "none",
                }}
              />
            </S.Label>
            <S.Label>
              Confirm
              <TextField
                type="password"
                placeholder="CONFIRM PASSWORD"
                size={SizeKey.MD}
                required
                inputProps={{
                  autoComplete: "none",
                }}
              />
            </S.Label>
          </S.TextBox>
          <Button
            type="submit"
            css={css`
              margin-top: 16px;
            `}
            fullWidth
            size={SizeKey.LG}
          >
            SignUp
          </Button>
        </S.SignUpForm>
      </S.SignUpBox>
    </S.Container>
  );
};

export default SignUpPage;
