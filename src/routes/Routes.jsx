import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import ListedBooks from './../pages/ListedBooks';
import PagesToRead from './../pages/PagesToRead';

export const router = createBrowserRouter([
    {
     path:'/',
     element: <MainLayout></MainLayout>,
     errorElement: <ErrorPage></ErrorPage>,
     children:[
        {
          path:'/',
          element:<Home></Home>,  
        },
        {
          path:'/listed-books',
          element:<ListedBooks></ListedBooks>,  
        },
        {
          path:'/page-read',
          element:<PagesToRead></PagesToRead>,  
        },

     ]
    }
]);
//     {
//       path: '/',
//       element: <MainLayout />,
//       errorElement: <ErrorPage />,
//       children: [
//         {
//           path: '/',
//           element: <Home />,
//         },
//         {
//           path: '/blogs',
//           element: <Blogs />,
//           loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
//         },
//         {
//           path: '/blog/:id',
//           element: <Blog />,
//           loader: ({ params }) =>
//             fetch(`https://dev.to/api/articles/${params?.id}`),
//           children: [
//             {
//               index: true,
//               element: <Content />,
//               loader: ({ params }) =>
//                 fetch(`https://dev.to/api/articles/${params?.id}`),
//             },
//             {
//               path: 'author',
//               element: <Author />,
//               loader: ({ params }) =>
//                 fetch(`https://dev.to/api/articles/${params?.id}`),
//             },
//           ],
//         },
//         //
//           path: '/bookmarks',
//           element: <Bookmarks />,
//         },
//       ],
//     },
//   ])
