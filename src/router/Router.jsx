import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from '../pages/Register/Register';
import Details from "../pages/Details/Details";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import About from "../components/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
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
          element: <PrivateRoute>
             <Details></Details>
          </PrivateRoute>,
          loader: () => fetch('/FakeData.json')
        },
        {
          path: '/userProfile',
          element: <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        },
        {
          path: '/updateProfile',
          element: <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        },
        {
          path: '/about',
          element: <PrivateRoute>
            <About></About>
          </PrivateRoute>
        }
        
      ]
    },
  ]);
  export default router;