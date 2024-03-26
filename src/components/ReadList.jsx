import { CiLocationOn } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { MdInsertPageBreak } from "react-icons/md";
import PropTypes from "prop-types";

const ReadList = ({ book }) => {
  const {
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div>
      <div className="card lg:card-side p-6 rounded-xl border my-6">
        <figure className="bg-[#1313130D] w-[300px] h-[250px] p-10">
          <img src={image} alt="Album" />
        </figure>
        <div className="ml-4">
          <h2 className=" font-bold text-2xl">{bookName}</h2>
          <p className="text-xl my-4">By: {author}</p>

          <div className="flex justify-start gap-6 items-center my-4">
            <div className="flex gap-4 items-center justify-start">
              <p className="font-bold">Tag</p>
              <ul className="flex gap-6">
                {tags.map((item) => (
                  <li
                    key={item.bookId}
                    className="text-green-400 bg-[#1313130D] p-1 rounded-xl font-bold"
                  >
                    #{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 items-center">
              <CiLocationOn></CiLocationOn>
              <p>Year of Publishing: {yearOfPublishing}</p>
            </div>
          </div>
          <div>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <IoIosPeople></IoIosPeople>
                <p>Publisher: {publisher}</p>
              </div>
              <div className="flex gap-2 items-center my-2">
                <MdInsertPageBreak></MdInsertPageBreak>
                <p>Page {totalPages}</p>
              </div>
            </div>
            <hr />
            <div>
              <div className="flex items-center gap-8 my-4">
                <p className="bg-[#1313130D] text-blue-400 text-xl p-2 rounded-xl">
                  Category: {category}
                </p>
                <p className="bg-[#1313130D] text-red-400 text-xl p-2 rounded-xl">
                  Rating: {rating}
                </p>
                <button className="btn bg-green-600 text-white text-xl">
                  Listen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReadList.propTypes = {
  book: PropTypes.object,
};

export default ReadList;
