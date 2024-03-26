import { useEffect, useState } from "react";

const ListedBooks = () => {
  const [listOfBooks, setListOfBooks] = useState([]);
  useEffect(() => {
    const getListedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setListOfBooks(getListedBooks);
  }, []);
  return (
    <div>
      {/* <ul>
        {listOfBooks.map((book) => (
          <li>{book.bookName}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default ListedBooks;
