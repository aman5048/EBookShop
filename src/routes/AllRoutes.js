import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  ProductsList,
  CartPage,
  ProductDetail,
  DashBoardPage,
  PageNotFound,
  Login,
  Register,
  OrderPage,
} from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="products" element={<ProductsList />} />
      <Route
        path="Cart"
        element={
          <ProtectedRoutes>
            <CartPage />
          </ProtectedRoutes>
        }
      />
      <Route
        path="order-summary"
        element={
          <ProtectedRoutes>
            <OrderPage />
          </ProtectedRoutes>
        }
      />
      <Route path="product/:id" element={<ProductDetail />} />
      <Route
        path="dashboard"
        element={
          <ProtectedRoutes>
            <DashBoardPage />
          </ProtectedRoutes>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
