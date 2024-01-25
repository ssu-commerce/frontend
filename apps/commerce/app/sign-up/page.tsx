"use client";

import { Button, SizeKey, TextField } from "@sc/ui";
import * as S from "./signUp.styles";
import { useSignUpMutation } from "api/sign/signUp";
import { useState, ChangeEvent } from "react";

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
      !!account.id &&
      !!account.password
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
              type="email"
              name="id"
              placeholder="ID"
              size={SizeKey.MD}
              required
              inputProps={{ autoComplete: "username" }}
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
                autoComplete: "new-password",
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
                autoComplete: "new-password",
              }}
              onChange={handleChangeAccount}
            />
          </S.Label>
          <S.AlertText>
            {alertCondition.rePassword ? "비밀번호가 일치하지 않습니다." : ""}
          </S.AlertText>
        </S.TextBox>
        <S.SubmitBox>
          <Button fullWidth size={SizeKey.LG} onClick={handleSubmitSignUp}>
            Sign Up
          </Button>
        </S.SubmitBox>
      </S.SignUpBox>
    </S.Container>
  );
};

export default SignUpPage;
