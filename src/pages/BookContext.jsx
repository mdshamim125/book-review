// // BookContext.js
// import { createContext, useContext, useState } from "react";

// const BookContext = createContext();

// export const useBookContext = () => useContext(BookContext);

// export const BookProvider = ({ children }) => {
//   const [readList, setReadList] = useState([]);
//   const [wishList, setWishList] = useState([]);

//   return (
//     <BookContext.Provider
//       value={{ readList, setReadList, wishList, setWishList }}
//     >
//       {children}
//     </BookContext.Provider>
//   );
// };
