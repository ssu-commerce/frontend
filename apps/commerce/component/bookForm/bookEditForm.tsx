"use client";

import { FormProvider, useForm } from "react-hook-form";
import BookInputField from "./bookInputField/bookInputField";
import type RegisterBookRequestDto from "interfaces/dtos/RegisterBookRequestDto";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import type { AxiosError } from "axios";
import axios from "utils/common/axios";
import { Button } from "@sc/ui";
import * as S from "./book.styles";
import { useRouter } from "next/navigation";
import useBookInputField from "./bookInputField/useBookInputField";

export const BookEditForm = ({ bookId }) => {
  const methods = useForm<RegisterBookRequestDto>();
  const router = useRouter();
  const { data, isSuccess, isLoading } = useQuery<RegisterBookRequestDto>({
    queryKey: ["book", "edit", bookId],
    queryFn: () => {
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
      console.log(error);
      if (message) {
        setAlert(message);
      }
    },
    onSuccess: (data) => {
      if (data) {
        // TODO: book/info/:id로 이동해야함
        router.push(`/book`, { scroll: false });
      }
    },
  });

  useEffect(() => {
    if (isSuccess) {
      methods.reset(data);
    }
  }, [isSuccess]);

  const onSubmit = (data: RegisterBookRequestDto) => {
    editBook({
      ...data,
      bookId,
    });
  };

  return (
    <S.Container>
      <S.Title>Eidt Book Info</S.Title>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <S.Content>
            <BookInputField loading={isLoading} />
          </S.Content>
          <S.Submit>
            <Button type="submit">Edit</Button>
          </S.Submit>
        </form>
      </FormProvider>
    </S.Container>
  );
};
