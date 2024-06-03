import { BookEditForm } from "component/bookForm/bookEditForm";

const EditBookPage = ({ params }: { params: { "book-id": string } }) => {
  return <BookEditForm bookId={params["book-id"]} />;
};

export default EditBookPage;
