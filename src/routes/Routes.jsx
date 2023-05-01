import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../LoginLayout/LoginLayout/LoginLayout";
import Login from "../LoginLayout/Login/Login";
import Register from "../LoginLayout/Register/Register";
import Banner from "../banner/Banner";



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
      }
    ]
  },
]);

export default router
