import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const ReadList = () => {
  const books = useLoaderData();
  console.log(books.bookId);
  const [readList, setReadList] = useState([]);
  useEffect(() => {
    const getReadBooks = JSON.parse(localStorage.getItem("read")) || [];
    setReadList(getReadBooks);
  }, []);
  console.log(readList);
  return (
    <div>
      <div>{readList.length}</div>
      <div>{books.length}</div>
    </div>
  );
};

export default ReadList;
