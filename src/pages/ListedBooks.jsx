import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const ListedBooks = () => {
    // console.log(handleRead);
  const [listOfBooks, setListOfBooks] = useState([]);
  useEffect(() => {
    const getListedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setListOfBooks(getListedBooks);
  }, []);
//   const handleStatus = () => {};
  return (
    <div>
      <h1 className="font-bold text-3xl text-center p-6 rounded-lg my-8 bg-[#1313130D]">
        Books
      </h1>
      <div role="tablist" className="tabs tabs-lifted w-1/2 mt-10">
        <a role="tab" className="tab text-xl">
          Read Books
        </a>
        <a role="tab" className="tab tab-active text-xl">
          Wishlist Books
        </a>
      </div>
    </div>
  );

  ListedBooks.propTypes = {
    handleRead: PropTypes.object,
    handleWishList: PropTypes.object,
  };
};

export default ListedBooks;
