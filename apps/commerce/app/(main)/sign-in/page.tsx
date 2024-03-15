"use client";

import { Button, Checkbox, SizeKey, TextField, VariantKey } from "@sc/ui";
import { css } from "@emotion/react";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useSignInMutation } from "api/sign/signIn";
import * as S from "./signIn.styles";

const SignInPage = () => {
  const [remember, setRemember] = useState(false);
  const [account, setAccount] = useState({
    id: "",
    password: "",
  });

  const { mutate: postSignIn } = useSignInMutation();

  const handleSubmitSignIn = (e: FormEvent) => {
    e.preventDefault();
    if (Boolean(account.id) && Boolean(account.password)) {
      postSignIn({
        id: account.id,
        password: account.password,
      });
    }
  };

  const handleClickRemember = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRemember(!remember);
  };

  const handleChangeAccount = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  return (
    <S.Container>
      <S.SignInBox>
        <S.Title>Sign In</S.Title>
        <S.SignInForm>
          <S.TextBox>
            <TextField
              inputProps={{
                autoComplete: "none",
              }}
              name="id"
              onChange={handleChangeAccount}
              placeholder="ID"
              required
              size={SizeKey.MD}
              type="email"
            />
            <TextField
              inputProps={{
                autoComplete: "none",
              }}
              name="password"
              onChange={handleChangeAccount}
              placeholder="PASSWORD"
              required
              size={SizeKey.MD}
              type="password"
            />
          </S.TextBox>
          <S.AddonBox>
            <Checkbox checked={remember} onChange={handleClickRemember}>
              remember
            </Checkbox>
            <Button
              css={css`
                width: fit-content;
              `}
              href="/sign-find"
              variant={VariantKey.Text}
            >
              find ID/Password
            </Button>
          </S.AddonBox>
          <Button
            css={css`
              width: 300px;
              margin-top: 16px;
            `}
            onClick={handleSubmitSignIn}
            size={SizeKey.LG}
            type="submit"
          >
            Sign In
          </Button>
        </S.SignInForm>
        <S.SubmitBox>
          <Button
            fullWidth
            href="/sign-up"
            onClick={handleSubmitSignIn}
            variant={VariantKey.Text}
          >
            Sign Up
          </Button>
        </S.SubmitBox>
      </S.SignInBox>
    </S.Container>
  );
};

export default SignInPage;
