import { toast } from "react-toastify";

export const saveDataToLocalStorage = (book) => {
  const savedData = JSON.parse(localStorage.getItem("books")) || [];
  const bookAvailable = savedData.find((item) => item.bookId == book.bookId);
  if (bookAvailable) {
    // console.log(book);
    toast.error("this book is already exists");
  } else {
    toast.success("successfully added in listed-books");
    savedData.push(book);
    localStorage.setItem("books", JSON.stringify(savedData));
  }
};
