import { createBrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Home from "./../Home/Home";
import Main from './../Layout/Main';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/",
        element:<Header></Header>
      }
    ],
  },
]);
