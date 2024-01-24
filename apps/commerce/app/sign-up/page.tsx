"use client";

import { Button, SizeKey, TextField, VariantKey } from "@sc/ui";
import * as S from "./signUp.styles";
import { css } from "@emotion/react";
import { ChangeEvent, useState } from "react";
import { useSignInMutation } from "api/signUp";

interface SignInAccount {
  id: string;
  password: string;
  rePassword: string;
}

export const SignUpPage = () => {
  const [account, setAccount] = useState<SignInAccount>({
    id: "",
    password: "",
    rePassword: "",
  });
  const { mutate } = useSignInMutation();

  const alertCondition = {
    rePassword:
      account.password !== "" &&
      account.rePassword !== "" &&
      account.password !== account.rePassword,
  };

  const handleChangeAccount = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const handleSubmitSignUp = async () => {
    if (
      account.password === account.rePassword &&
      !!account.id &&
      !!account.password
    ) {
      console.log("mute");
      await mutate({
        id: account.id,
        password: account.password,
      });
    }
  };

  return (
    <S.Container>
      <S.SignUpBox>
        <S.Title>Sign Up</S.Title>
        <S.TextBox>
          <S.Label>
            ID
            <TextField
              type="id"
              name="id"
              placeholder="ID"
              size={SizeKey.MD}
              required
              inputProps={{ autoComplete: "none" }}
              onChange={handleChangeAccount}
            />
          </S.Label>
          <S.Label>
            Password
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
          </S.Label>
          <S.Label>
            Confirm
            <TextField
              type="password"
              name="rePassword"
              placeholder="CONFIRM PASSWORD"
              size={SizeKey.MD}
              required
              inputProps={{
                autoComplete: "none",
              }}
              onChange={handleChangeAccount}
            />
          </S.Label>
          {alertCondition.rePassword && (
            <S.AlertText>비밀번호가 일치하지 않습니다.</S.AlertText>
          )}
        </S.TextBox>
        <Button
          css={css`
            margin-top: 16px;
          `}
          fullWidth
          size={SizeKey.LG}
          onClick={handleSubmitSignUp}
        >
          SignUp
        </Button>
      </S.SignUpBox>
    </S.Container>
  );
};

export default SignUpPage;
