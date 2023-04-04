import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createHashRouter, RouterProvider } from "react-router-dom";
import RootLayout, { RootIndex } from "./pages";
import About from "./pages/about";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <RootIndex /> },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render
  (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
