import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import ListedBooks from "./../pages/ListedBooks";
import PagesToRead from "./../pages/PagesToRead";
import BookDetails from "../pages/BookDetails";

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
      },
      {
        path: "/page-read",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);
