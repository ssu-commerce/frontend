"use client";

import { useRouter } from "next/navigation";
import { Button, SizeKey, TextField, VariantKey } from "@sc/ui";
import { css } from "@emotion/react";
import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import axios from "axios";
import * as S from "./signIn.styles";

export interface SignInRq {
  id: string;
  password: string;
}

export interface SignInRs {
  accessToken: string;
}

const SignInPage = () => {
  const router = useRouter();
  const [account, setAccount] = useState({
    id: "",
    password: "",
  });
  const [alert, setAlert] = useState("");
  const { mutate: postSignIn } = useMutation<
    SignInRs,
    AxiosError<string>,
    SignInRq
  >({
    mutationFn: (rq) =>
      axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/sign-in`, rq),
    onError: (error) => {
      const status = error.response?.status;
      const message = error.response?.data;

      switch (status) {
        case 401: {
          setAlert("id or password error");
          break;
        }
        default: {
          if (message) {
            setAlert(message);
            break;
          }
          setAlert("login error");
          break;
        }
      }
    },
    onSuccess: (data) => {
      sessionStorage.setItem("accessToken", data.accessToken);
      router.push("/");
    },
  });

  const handleSubmitSignIn = (e: FormEvent) => {
    e.preventDefault();
    if (Boolean(account.id) && Boolean(account.password)) {
      postSignIn({
        id: account.id,
        password: account.password,
      });
    }
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
          <S.AlertText data-testid="failSignIn">{alert}</S.AlertText>
          <S.AddonBox>
            <Button href="/sign-find" variant={VariantKey.Text}>
              find ID/Password
            </Button>
          </S.AddonBox>
          <Button
            css={css`
              width: 300px;
              margin-top: 16px;
            `}
            disabled={account.id === "" && account.password === ""}
            onClick={handleSubmitSignIn}
            size={SizeKey.LG}
            testId="signIn"
            type="submit"
          >
            Sign In
          </Button>
        </S.SignInForm>
        <S.SubmitBox>
          <Link href="/sign-up">
            <Button fullWidth testId="signUp" variant={VariantKey.Text}>
              Sign Up
            </Button>
          </Link>
        </S.SubmitBox>
      </S.SignInBox>
    </S.Container>
  );
};

export default SignInPage;
