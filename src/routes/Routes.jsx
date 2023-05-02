import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../LoginLayout/LoginLayout/LoginLayout";
import Login from "../LoginLayout/Login/Login";
import Register from "../LoginLayout/Register/Register";
import Banner from "../banner/Banner";
import Blogs from "../Pages/Blogs/Blogs";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: '/',
        element: <Banner></Banner>
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
        path: 'blog',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

export default router
