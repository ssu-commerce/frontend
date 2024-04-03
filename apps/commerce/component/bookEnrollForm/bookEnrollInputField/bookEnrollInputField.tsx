import { Fragment } from "react";
import useBookEnrollInputField from "component/bookEnrollForm/bookEnrollInputField/useBookEnrollInputField";

const BookEnrollInputField = () => {
  const {
    titleRegister,
    contentRegister,
    writerRegister,
    priceRegister,
    publishDateRegister,
    isbnRegister,
    categoryIdRegister,
    maxBorrowDayRegister,
  } = useBookEnrollInputField();
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

export default BookEnrollInputField;
