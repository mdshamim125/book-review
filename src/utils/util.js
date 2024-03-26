import { toast } from "react-toastify";

export const saveDataToLocalStorageByRead = (book) => {
  const savedData = JSON.parse(localStorage.getItem("read")) || [];
  const bookAvailable = savedData.find((item) => item.bookId == book.bookId);
  if (bookAvailable) {
    toast.error("this book is already exists");
  } else {
    toast.success("successfully added in listed-books");
    savedData.push(book);
    localStorage.setItem("read", JSON.stringify(savedData));
  }
};

export const saveDataToLocalStorageByWish = (book) => {
  const savedData = JSON.parse(localStorage.getItem("wish")) || [];
  const bookAvailable = savedData.find((item) => item.bookId == book.bookId);
  const checkRead = JSON.parse(localStorage.getItem("read")) || [];
  const isAvailable = checkRead.find((item) => item.bookId == book.bookId);
  if (bookAvailable || isAvailable) {
    toast.error("this book is already exists");
  } else {
    toast.success("successfully added in listed-books");
    savedData.push(book);
    localStorage.setItem("wish", JSON.stringify(savedData));
  }
};
