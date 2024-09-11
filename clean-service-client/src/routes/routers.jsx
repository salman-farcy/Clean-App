import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import SingUp from "../pages/SingUp";
import Contact from "../pages/Contact";
import AdminLayout from "../layouts/AdminLayout";
import AddServices from "../pages/adminPages/AddServices";
import PrivateRoute from "./PrivateRoute";



const routers = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: '/about',
            element: <About />
         },
         {
            path: '/contact',
            element: <PrivateRoute> <Contact /> </PrivateRoute> 
         },
      ]
   },
   {path:"/login",  element: <Login /> },
   {path: "/singup", element: <SingUp />},
   {
      path: "/admin",
      element: <AdminLayout />,
      children: [
         {
            path: 'addservice',
            element: <AddServices />
         }
      ]
   }
])

export default routers;