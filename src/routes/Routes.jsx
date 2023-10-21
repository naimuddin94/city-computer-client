import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AddProduct from "../pages/add-product/AddProduct";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import BrandDetails from "../pages/brand-details/BrandDetails";
import ProductDetails from "../pages/Product-details/ProductDetails";
import UpdateProduct from "../pages/update-product/UpdateProduct";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/error/NotFound";
import { brandLoader, homeLoader } from "../loader/loader";
import NonUserRoute from "./NonUserRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => homeLoader(),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <NonUserRoute>
            <Login />
          </NonUserRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <NonUserRoute>
            <Register />
          </NonUserRoute>
        ),
      },
      {
        path: "/brand/:name",
        element: <BrandDetails />,
        loader: ({ params }) => brandLoader(params.name),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://city-compters-server-cvbkstvqg-naimuddin94.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://city-compters-server-cvbkstvqg-naimuddin94.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
