"use client";

import { FormProvider, useForm } from "react-hook-form";
import BookInputField from "./bookInputField/bookInputField";
import type RegisterBookRequestDto from "interfaces/dtos/RegisterBookRequestDto";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

export const BookEditForm = ({ bookId }) => {
  const methods = useForm<RegisterBookRequestDto>();

  const { data, isSuccess } = useQuery<RegisterBookRequestDto>({
    queryKey: ["book", "edit", bookId],
    queryFn: async () =>
      await axios.get(`${process.env.NEXT_PUBLIC_API_KEY}/commerce/book`),
  });

  useEffect(() => {
    if (isSuccess) {
      methods.reset(data);
    }
  }, [isSuccess]);

  const onSubmit = (data: RegisterBookRequestDto) => {
    console.log(data);
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
