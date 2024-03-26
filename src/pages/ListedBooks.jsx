
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Nav from "../components/Nav";
import { NavLink } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  // Define state variables for read and wish lists
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  // Fetch data for read list
  useEffect(() => {
    const getReadBooks = JSON.parse(localStorage.getItem("read")) || [];
    setReadList(getReadBooks);
  }, []);

  // Fetch data for wish list
  useEffect(() => {
    const getWishBooks = JSON.parse(localStorage.getItem("wish")) || [];
    setWishList(getWishBooks);
  }, []);

  // Define a function to handle tab click
  const handleTabClick = (index) => {
    setTabIndex(index);
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center p-6 rounded-lg my-8 bg-[#1313130D]">
        Books
      </h1>
      <div className="flex">
        <NavLink
          to="read-list"
          onClick={() => handleTabClick(0)}
          className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          }  `}
        >
          <span>Read Books</span>
        </NavLink>
        <NavLink
          to="wish-list"
          onClick={() => handleTabClick(1)}
          className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          }  `}
        >
          <span>Wishlist Books</span>
        </NavLink>
      </div>

      {/* Render content based on selected tab */}
      {tabIndex === 0 && (
        <div>
          {/* Render content for read list */}
          {/* For example: */}
          <ul>
            {readList.map((book) => (
              <li key={book.id}>{book.bookName}</li>
            ))}
          </ul>
        </div>
      )}

      {tabIndex === 1 && (
        <div>
          {/* Render content for wish list */}
          {/* For example: */}
          <ul>
            {wishList.map((book) => (
              <li key={book.id}>{book.bookName}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListedBooks;
