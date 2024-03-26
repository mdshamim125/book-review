import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { ToastContainer } from "react-toastify";
// import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ToastContainer></ToastContainer> */}
    {/* <Toaster></Toaster> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
