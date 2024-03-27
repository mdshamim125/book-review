import { useLoaderData } from "react-router";
import Hero from "../components/Hero";
import Books from "./Books";
import PropTypes from "prop-types";

const Home = () => {
  const books = useLoaderData();
  return (
    <div>
      <Hero></Hero>
      <h1 className="font-bold text-4xl text-center my-10 mt-16">Books</h1>
      <div className="lg:grid gap-6 lg:grid-cols-3">
        {books.map((book) => (
          <Books key={book.bookId} book={book}></Books>
        ))}
      </div>
    </div>
  );

  Home.propTypes = {
    books: PropTypes.array,
  };
};

export default Home;
