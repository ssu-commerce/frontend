"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useSignInMutation = () => {
  return useMutation(({ id, password }: { id: string; password: string }) =>
    axios.post(`${process.env.ACCOUNT_HOST}/sign-up`, {
      id,
      password,
    }),
  );
};
