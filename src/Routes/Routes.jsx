import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Error/Error";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToy from "../Pages/AllToys/SingleToy";
import { productsAndCartData } from "../loaders/getCart&ProductsData";
import Cart from "../Pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    loader: productsAndCartData,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      { 
        path: "/cart", 
        element: <Cart /> 
      },
      {
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "allToys/:id",
        element: <SingleToy />,
        loader: ({ params }) => fetch(`allToy.json/${params.id}`),
      },
    ],
  },
]);
export default router;
