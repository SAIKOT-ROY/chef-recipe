import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../LoginLayout/LoginLayout/LoginLayout";
import Login from "../LoginLayout/Login/Login";
import Register from "../LoginLayout/Register/Register";
import Banner from "../banner/Banner";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Home/Home";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'details/:id',
        element: <ViewDetails></ViewDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
      },
      {
        path: 'blog',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

export default router
