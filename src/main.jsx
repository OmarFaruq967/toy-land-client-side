import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home.jsx";
import Main from "./Component/Main/Main.jsx";
import ErrorPage from "./Component/ErrorPage/ErrorPage.jsx";
import Login from "./Component/Login/Login.jsx";
import AuthProvider from "./Component/Provider/AuthProvider.jsx";
import Register from "./Component/Register/Register.jsx";
import AllToys from "./Component/AllToys/AllToys.jsx";
import ToyDetailsPage from "./Component/SubCategory/ToyDetailsPage.jsx";
import AddToy from "./Component/AllToys/AddToy";
import MyToys from "./Component/MyToys/MyToys";
import PrivetRoute from "./Component/Routes/PrivetRoute";
import ToyDetails from "./Component/AllToys/ToyDetails";
import Blog from "./Component/Blog/Blog";
import ToyUpdated from "./Component/MyToys/ToyUpdated";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "add-toy",
        element: (
          <PrivetRoute>
            <AddToy />
          </PrivetRoute>
        ),
      },
      {
        path: "all-toys",
        element: <AllToys />,
      },
      {
        path: "/categories/:id/:toyId",
        element: (
          <PrivetRoute>
            <ToyDetailsPage />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://toy-land-server-drab.vercel.app/categories/${params.id}?toyId=${params.toyId}`
          ),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivetRoute>
            <ToyDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-land-server-drab.vercel.app/toys/${params.id}`),
      },

      {
        path: "my-toys",
        element: (
          <PrivetRoute>
            <MyToys />
          </PrivetRoute>
        ),
      },
      {
        path: "/toys/:id",
        element: <ToyUpdated></ToyUpdated>,
        loader: ({ params }) =>
          fetch(`https://toy-land-server-drab.vercel.app/toys/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
