import { FcRating } from "react-icons/fc";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Books = ({ book }) => {
  console.log(book);
  const { bookName, author, image, rating, category, bookId, tags } = book;

  return (
    <div className="col-span-1">
      <div className="grid card w-96 p-4 border">
        <Link
          to={`/book/${bookId}`}
          className="max-w-sm mx-auto transition p-2  hover:scale-105 border-opacity-30  group hover:no-underline focus:no-underline "
        >
          <figure className="">
            <img
              src={image}
              className="w-[330px] h-[300px] bg-[#1313130D] rounded-2xl"
            />
          </figure>
          <div className="card-body">
          <ul className="flex text-green-400 font-bold gap-6">
              {tags.map((list, id) => (
                <li key={id} className="bg-[#1313130D] rounded-3xl p-1">{list}</li>
              ))}
            </ul>
            <h2 className="text-2xl font-bold">{bookName}</h2>
            <p className="text-xl">By: {author}</p>
            <p className="border-b border-dashed"></p>
            <div className="flex text-xl">
              <p>{category}</p>
              <div className="flex items-center gap-2">
                <div>{rating}</div>
                <div>
                  <FcRating></FcRating>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );

  // eslint-disable-next-line no-unreachable
  Books.propTypes = {
    book: PropTypes.object,
  };
};

export default Books;
