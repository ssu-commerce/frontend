import { useFormContext } from "react-hook-form";
import type { ChangeEvent } from "react";
import { numerizeInput } from "utils/common/input.util";

const useBookInputField = () => {
  const { register, setValue } = useFormContext();

  const titleRegister = register("title", { required: true });
  const contentRegister = register("content");
  const writerRegister = register("writer", { required: true });
  const priceRegister = register("price", {
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      setValue("price", numerizeInput(e.target.value));
    },
    required: true,
  });
  const publishDateRegister = register("publishDate");
  const isbnRegister = register("isbn", { required: true });
  const maxBorrowDayRegister = register("maxBorrowDay", {
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      setValue("maxBorrowDay", numerizeInput(e.target.value));
    },
    required: true,
  });
  const categoryIdRegister = register("categoryId", { required: true });

  return {
    titleRegister,
    contentRegister,
    writerRegister,
    priceRegister,
    publishDateRegister,
    isbnRegister,
    maxBorrowDayRegister,
    categoryIdRegister,
  };
};

export default useBookInputField;
