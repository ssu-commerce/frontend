"use client";

import { Button, SizeKey, TextField } from "@sc/ui";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useSignUpMutation } from "api/sign/signUp";
import * as S from "./signUp.styles";

interface SignInAccount {
  id: string;
  password: string;
  rePassword: string;
}

const SignUpPage = () => {
  const [account, setAccount] = useState<SignInAccount>({
    id: "",
    password: "",
    rePassword: "",
  });
  const { mutate: postSignUp } = useSignUpMutation();

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

  const handleSubmitSignUp = () => {
    if (
      account.password === account.rePassword &&
      Boolean(account.id) &&
      Boolean(account.password)
    ) {
      postSignUp({
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
              inputProps={{ autoComplete: "username" }}
              name="id"
              onChange={handleChangeAccount}
              placeholder="ID"
              required
              size={SizeKey.MD}
              type="email"
            />
          </S.Label>
          <S.Label>
            Password
            <TextField
              inputProps={{
                autoComplete: "new-password",
              }}
              name="password"
              onChange={handleChangeAccount}
              placeholder="PASSWORD"
              required
              size={SizeKey.MD}
              type="password"
            />
          </S.Label>
          <S.Label>
            Confirm
            <TextField
              inputProps={{
                autoComplete: "new-password",
              }}
              name="rePassword"
              onChange={handleChangeAccount}
              placeholder="CONFIRM PASSWORD"
              required
              size={SizeKey.MD}
              type="password"
            />
          </S.Label>
          <S.AlertText>
            {alertCondition.rePassword ? "비밀번호가 일치하지 않습니다." : ""}
          </S.AlertText>
        </S.TextBox>
        <S.SubmitBox>
          <Button fullWidth onClick={handleSubmitSignUp} size={SizeKey.LG}>
            Sign Up
          </Button>
        </S.SubmitBox>
      </S.SignUpBox>
    </S.Container>
  );
};

export default SignUpPage;
