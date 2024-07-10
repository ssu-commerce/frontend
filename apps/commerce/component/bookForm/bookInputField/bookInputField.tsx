import { Fragment } from "react";
import useBookInputField from "component/bookForm/bookInputField/useBookInputField";
import { TextArea, TextField } from "@sc/ui";
import * as S from "./bookInputField.styles";

interface BookInputFieldProps {
  loading?: boolean;
}

const BookInputField = ({ loading }: BookInputFieldProps) => {
  const {
    titleRegister,
    contentRegister,
    writerRegister,
    priceRegister,
    publishDateRegister,
    isbnRegister,
    categoryIdRegister,
    maxBorrowDayRegister,
  } = useBookInputField();

  return (
    <Fragment>
      <S.Wrapper>
        <S.Label>
          <S.LabelTitle>Title</S.LabelTitle>
          <S.InputWrapper flexGrow={1}>
            <TextField {...titleRegister} loading={loading} />
          </S.InputWrapper>
        </S.Label>
        <S.Label>
          <S.LabelTitle>Content</S.LabelTitle>
          <S.InputWrapper flexGrow={1}>
            <TextArea {...contentRegister} rows={5} loading={loading} />
          </S.InputWrapper>
        </S.Label>
        <S.Label>
          <S.LabelTitle>Writer</S.LabelTitle>
          <S.InputWrapper width="220px">
            <TextField {...writerRegister} loading={loading} />
          </S.InputWrapper>
        </S.Label>
        <S.Label>
          <S.LabelTitle>Price</S.LabelTitle>
          <S.InputWrapper width="220px">
            <TextField
              {...priceRegister}
              inputMode={"numeric"}
              loading={loading}
            />
          </S.InputWrapper>
        </S.Label>
        <S.Label>
          <S.LabelTitle>Date</S.LabelTitle>
          <S.InputWrapper width="220px">
            <TextField
              {...publishDateRegister}
              type={"date"}
              loading={loading}
            />
          </S.InputWrapper>
        </S.Label>
        <S.Label>
          <S.LabelTitle>IsBn</S.LabelTitle>
          <S.InputWrapper width="100px">
            <TextField {...isbnRegister} loading={loading} />
          </S.InputWrapper>
        </S.Label>
        <S.Label>
          <S.LabelTitle>Borrow Day</S.LabelTitle>
          <S.InputWrapper width="100px">
            <TextField
              {...maxBorrowDayRegister}
              inputMode={"numeric"}
              loading={loading}
            />
          </S.InputWrapper>
        </S.Label>
        <S.Label>
          <S.LabelTitle>Category</S.LabelTitle>
          <S.InputWrapper width="220px">
            <TextField {...categoryIdRegister} loading={loading} />
          </S.InputWrapper>
        </S.Label>
      </S.Wrapper>
    </Fragment>
  );
};

export default BookInputField;
