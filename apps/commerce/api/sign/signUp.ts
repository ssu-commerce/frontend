"use client";

import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export interface SignUpRq {
  name: string;
  id: string;
  password: string;
  confirmPassword: string;
}

export const useSignUpMutation = (
  options: UseMutationOptions<{}, AxiosError<string>, SignUpRq, unknown>,
) => {
  return useMutation({
    ...options,
    mutationFn: (rq) =>
      axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/sign-up`, rq),
  });
};
