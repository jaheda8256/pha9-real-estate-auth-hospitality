import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from '../pages/Register/Register';
import Details from "../pages/Details/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/FakeData.json')
        }, 
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/details/:id',
          element: <Details></Details>,
          loader: () => fetch('/FakeData.json')
        }
        
      ]
    },
  ]);
  export default router;