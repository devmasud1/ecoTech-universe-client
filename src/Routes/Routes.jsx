import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Home from "../Pages/Home/Home";
import BrandItems from "../Pages/Home/BrandItems";
import BrandItemDetails from "../Pages/Home/BrandItemDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/brandItem/:brand",
        element: <BrandItems></BrandItems>,
      },
      {
        path: "/productDetails/:id",
        element: <BrandItemDetails></BrandItemDetails>,
        loader: ({params}) => fetch(`https://eco-tech-universe-server.vercel.app/product/${params.id}`),
      },
      {
        path:"/productUpdate/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({params}) => fetch(`https://eco-tech-universe-server.vercel.app/product/${params.id}`),
      }
    ],
  },
]);

export default Routes;
