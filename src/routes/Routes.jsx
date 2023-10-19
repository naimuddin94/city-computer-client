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

const homeLoader = async () => {
  const [bannerDataList, companies] = await Promise.all([
    fetch("http://localhost:5000/banner").then((response) => response.json()),
    fetch("http://localhost:5000/companies").then((response) =>
      response.json()
    ),
  ]);

  return { bannerDataList, companies };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/brand/:name",
        element: <BrandDetails />,
        loader: () => fetch("http://localhost:5000/companies"),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <UpdateProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);

export default router;
