import { useLoaderData, useParams } from "react-router";
import PropTypes from "prop-types";
import { saveDataToLocalStorageByWish } from "../utils/util";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDataToLocalStorageByRead } from "./../utils/util";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const book = books.find((book) => book.bookId == id);
  const {
    image,
    author,
    bookName,
    category,
    review,
    totalPages,
    tags,
    rating,
    publisher,
    yearOfPublishing,
  } = book;

  const handleRead = () => {
    saveDataToLocalStorageByRead(book);
  };

  const handleWishlist = () => {
    saveDataToLocalStorageByWish(book);
  };

  return (
    <div className="my-10">
      <div className="lg:flex gap-10">
        <div className="bg-[#1313130D] lg:w-1/2 m-6">
          <img src={image} className="w-full lg:h-[500px]" alt="" />
        </div>
        <div className="lg:w-1/2 m-6">
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p className="text-xl my-4">By: {author}</p>
          <hr />
          <p className="text-xl my-4">{category}</p>
          <hr />
          <p>
            <span className="font-bold my-8">review: </span>
            {review}
          </p>
          <div className="flex items-center gap-6 my-6">
            <span className="font-bold my-8">Tag</span>
            <ul className="flex text-green-400 font-bold gap-6">
              {tags.map((list, id) => (
                <li key={id} className="bg-[#1313130D] rounded-3xl p-1">
                  #{list}
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="flex gap-10 my-6">
            <p>Number of Pages:</p>
            <p className="font-bold">{totalPages}</p>
          </div>
          <div className="flex gap-10 my-6">
            <p>Publisher:</p>
            <p className="font-bold">{publisher}</p>
          </div>
          <div className="flex gap-10 my-6">
            <p>Year of Publishing:</p>
            <p className="font-bold">{yearOfPublishing}</p>
          </div>
          <div className="flex gap-10 my-6">
            <p>Rating:</p>
            <p className="font-bold">{rating}</p>
          </div>
          <div className="flex gap-2 my-6 items-center">
            <a
              onClick={() => handleRead(book)}
              href="#_"
              className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
                Read
              </span>
            </a>
            <a href="#_" onClick={() => handleWishlist(book)}>
              <button className="btn bg-blue-300 text-white font-bold">
                Wishlist
              </button>
            </a>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );

  // eslint-disable-next-line no-unreachable
  BookDetails.propTypes = {
    tags: PropTypes.array,
  };
};

export default BookDetails;
