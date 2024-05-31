import { Fragment } from "react";
import useBookInputField from "component/bookForm/bookInputField/useBookInputField";

const BookInputField = () => {
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
      <input {...titleRegister} />
      <input {...contentRegister} />
      <input {...writerRegister} />
      <input {...priceRegister} inputMode={"numeric"} />
      <input {...publishDateRegister} type={"date"} />
      <input {...isbnRegister} />
      <input {...maxBorrowDayRegister} inputMode={"numeric"} />
      <input {...categoryIdRegister} />
    </Fragment>
  );
};

export default BookInputField;
