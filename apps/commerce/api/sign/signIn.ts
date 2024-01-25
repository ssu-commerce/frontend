"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useSignInMutation = () => {
  return useMutation({
    mutationFn: ({ id, password }: { id: string; password: string }) =>
      axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/sign-in`, {
        id,
        password,
      }),
  });
};
