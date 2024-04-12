"use client";

import {
  DefaultError,
  UseMutationOptions,
  useMutation,
} from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

interface SignInRq {
  id: string;
  password: string;
}

interface SignInRs {
  accessToken: string;
}

export const useSignInMutation = (
  options: UseMutationOptions<SignInRs, AxiosError, SignInRq, unknown>,
) => {
  return useMutation({
    ...options,
    mutationFn: ({ id, password }) =>
      axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/sign-in`, {
        id,
        password,
      }),
  });
};
