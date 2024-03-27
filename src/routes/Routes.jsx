import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import ListedBooks from "./../pages/ListedBooks";
import PagesToRead from "./../pages/PagesToRead";
import BookDetails from "../pages/BookDetails";
import ReadList from "./../components/ReadList";
import WishList from "./../components/WishList";
import Author from "../pages/Author";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        // loader: (params) => fetch(`fakeData${params?.id}.json`),
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: "read-list",
            element: <ReadList></ReadList>,
            loader: () => fetch("/fakeData.json"),
          },
          {
            path: "wish-list",
            element: <WishList></WishList>,
          },
        ],
      },
      {
        path: "/page-read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/author",
        element: <Author></Author>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);
