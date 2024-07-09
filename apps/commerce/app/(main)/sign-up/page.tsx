"use client";

import { Button, SizeKey, TextField } from "@sc/ui";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import axios from "utils/common/axios";
import * as S from "./signUp.styles";

export interface SignUpRq {
  name: string;
  id: string;
  password: string;
  confirmPassword: string;
}

type SignInAccount = SignUpRq;

const SignUpPage = () => {
  const router = useRouter();
  const [alertText, setAlertText] = useState("");
  const [account, setAccount] = useState<SignInAccount>({
    name: "",
    id: "",
    password: "",
    confirmPassword: "",
  });
  const { mutate: postSignUp } = useMutation<
    boolean,
    AxiosError<string>,
    SignUpRq
  >({
    mutationFn: (rq) =>
      axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/sign-up`, rq),
    onSuccess: () => {
      router.push("/sign-in");
    },
    onError: (error) => {
      const message = error.response?.data;
      if (message) {
        setAlertText(message);
      }
    },
  });

  const handleChangeAccount = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const handleSubmitSignUp = () => {
    postSignUp(account);
  };

  return (
    <S.Container>
      <S.SignUpBox>
        <S.Title>Sign Up</S.Title>
        <S.TextBox>
          <S.Label>
            name
            <TextField
              inputProps={{ autoComplete: "name" }}
              name="name"
              onChange={handleChangeAccount}
              placeholder="NAME"
              required
              size={SizeKey.MD}
              type="name"
            />
          </S.Label>
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
              name="confirmPassword"
              onChange={handleChangeAccount}
              placeholder="CONFIRM PASSWORD"
              required
              size={SizeKey.MD}
              type="password"
            />
          </S.Label>
          <S.AlertText data-testid="failSignUp">{alertText}</S.AlertText>
        </S.TextBox>
        <S.SubmitBox>
          <Button
            disabled={Object.values(account).every((item) => !item)}
            fullWidth
            onClick={handleSubmitSignUp}
            size={SizeKey.LG}
            testId="signUp"
          >
            Sign Up
          </Button>
        </S.SubmitBox>
      </S.SignUpBox>
    </S.Container>
  );
};

export default SignUpPage;
