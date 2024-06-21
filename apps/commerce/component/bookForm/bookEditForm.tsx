"use client";

import { FormProvider, useForm } from "react-hook-form";
import BookInputField from "./bookInputField/bookInputField";
import type RegisterBookRequestDto from "interfaces/dtos/RegisterBookRequestDto";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import type { AxiosError } from "axios";

axios.defaults.headers["x-msw-intention"] = "true";

export const BookEditForm = ({ bookId }) => {
  const methods = useForm<RegisterBookRequestDto>();

  const { data, isSuccess } = useQuery<RegisterBookRequestDto>({
    queryKey: ["book", "edit", bookId],
    queryFn: () => {
      console.log(
        "-------------------------------- fetch /book?id=1 --------------------------------",
      );
      return axios.get(`${process.env.NEXT_PUBLIC_API_KEY}/book?id=${bookId}`);
    },
  });
  const [alert, setAlert] = useState("");

  const { mutate: editBook } = useMutation<
    boolean,
    AxiosError<string>,
    RegisterBookRequestDto
  >({
    mutationFn: async (rq) =>
      await axios.post(`${process.env.NEXT_PUBLIC_API_KEY}/book/edit`, rq),
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
    onSuccess: (data) => {},
  });

  useEffect(() => {
    if (isSuccess) {
      methods.reset(data);
    }
  }, [isSuccess]);

  const onSubmit = (data: RegisterBookRequestDto) => {
    editBook(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <BookInputField />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
