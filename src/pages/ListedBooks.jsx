import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ReadList from "../components/ReadList";
import WishList from "../components/WishList";
import { sortList } from "../utils/sort";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const getReadBooks = JSON.parse(localStorage.getItem("read")) || [];
    setReadList(getReadBooks);
  }, []);

  useEffect(() => {
    const getWishBooks = JSON.parse(localStorage.getItem("wish")) || [];
    setWishList(getWishBooks);
  }, []);

  const handleTabClick = (index) => {
    setTabIndex(index);
  };


  const handleSortReadList = (field) => {
    const sortedReadList = sortList(readList, field);
    setReadList(sortedReadList);
  };

  const handleSortWishList = (field) => {
    const sortedWishList = sortList(wishList, field);
    setWishList(sortedWishList);
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-center p-6 rounded-lg my-8 bg-[#1313130D]">
        Books
      </h1>

      <div className="flex justify-center">
        <ul className="menu my-6 bg-green-600 text-white font-bold  w-40 rounded-box">
          <li>
            <details>
              <summary>Sort By</summary>
              <ul>
                <li>
                  <a
                    onClick={() => {
                      handleSortReadList("totalPages");
                      handleSortWishList("totalPages");
                    }}
                  >
                    Page No
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleSortReadList("bookName");
                      handleSortWishList("bookName");
                    }}
                  >
                    Book Name
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleSortReadList("rating");
                      handleSortWishList("rating");
                    }}
                  >
                    Rating
                  </a>
                </li>
                
              </ul>
            </details>
          </li>
        </ul>
      </div>

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

          {readList.map((book) => (
            <ReadList book={book} key={book.bookId}></ReadList>
          ))}
        </div>
      )}

      {tabIndex === 1 && (
        <div>
          {/* Render content for wish list */}
          {/* For example: */}
          <ul>
            {wishList.map((book) => (
              <WishList book={book} key={book.bookId}></WishList>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ListedBooks;
