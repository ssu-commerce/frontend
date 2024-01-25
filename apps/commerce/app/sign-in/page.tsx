"use client";

import { Button, Checkbox, SizeKey, TextField, VariantKey } from "@sc/ui";
import * as S from "./signIn.styles";
import { css } from "@emotion/react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useSignInMutation } from "api/sign/signIn";

export const SignInPage = () => {
  const [remember, setRemember] = useState(false);
  const [account, setAccount] = useState({
    id: "",
    password: "",
  });

  const { mutate: postSignIn } = useSignInMutation();

  const handleSubmitSignIn = (e: FormEvent) => {
    e.preventDefault();
    if (!!account.id && !!account.password) {
      postSignIn({
        id: account.id,
        password: account.password,
      });
    }
  };

  const handleClickRemember = (e: ChangeEvent<HTMLInputElement>) => {
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
              type="email"
              name="id"
              placeholder="ID"
              size={SizeKey.MD}
              required
              inputProps={{
                autoComplete: "none",
              }}
              onChange={handleChangeAccount}
            />
            <TextField
              type="password"
              name="password"
              placeholder="PASSWORD"
              size={SizeKey.MD}
              required
              inputProps={{
                autoComplete: "none",
              }}
              onChange={handleChangeAccount}
            />
          </S.TextBox>
          <S.AddonBox>
            <Checkbox checked={remember} onChange={handleClickRemember}>
              remember
            </Checkbox>
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
            onClick={handleSubmitSignIn}
          >
            Sign In
          </Button>
        </S.SignInForm>
        <S.SubmitBox>
          <Button
            href="/sign-up"
            variant={VariantKey.Text}
            fullWidth
            onClick={handleSubmitSignIn}
          >
            Sign Up
          </Button>
        </S.SubmitBox>
      </S.SignInBox>
    </S.Container>
  );
};

export default SignInPage;
