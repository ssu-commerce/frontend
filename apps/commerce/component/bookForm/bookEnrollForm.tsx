"use client";

import { FormProvider, useForm } from "react-hook-form";
import type RegisterBookRequestDto from "interfaces/dtos/RegisterBookRequestDto";
import BookInputField from "./bookInputField/bookInputField";

export const BookEnrollForm = () => {
  const methods = useForm<RegisterBookRequestDto>();

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
