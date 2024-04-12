"use client";

import {
  DefaultError,
  UseMutationOptions,
  useMutation,
} from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export interface SignInRq {
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
    mutationFn: (rq) =>
      axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/sign-in`, rq),
  });
};
