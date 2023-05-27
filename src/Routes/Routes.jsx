import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToy from "../Pages/AllToys/SingleToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<Error/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<SignUp/>
        },
        {
          path:'/blog',
          element:<Blog/>
        },
        {
          path:'/allToys',
          element:<AllToys/>,
          loader: () => fetch('http://localhost:5000/allToys')
        },
       {
        path:'allToys/:id',
        element:<SingleToy/>,
        loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
        
       }
    
      ]}
    
  ]);
  export default router;