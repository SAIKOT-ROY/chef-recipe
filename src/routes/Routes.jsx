import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../LoginLayout/LoginLayout/LoginLayout";
import Login from "../LoginLayout/Login/Login";
import Register from "../LoginLayout/Register/Register";
import Banner from "../banner/Banner";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Home/Home";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement:<ErrorPage />,
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
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-ten-server-saikot-roy.vercel.app/chef/${params.id}`)
      },
      {
        path: 'blog',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

export default router
