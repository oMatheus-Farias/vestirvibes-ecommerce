import { Route, Routes } from "react-router-dom";

//Components
import HomePage from "../pages/home/home.page";
import ExplorePage from "../pages/explore/explore.page";
import CategoryDetailsPage from "../pages/category-details/category-details.page";
import CheckoutPage from "../pages/checkout/checkout.page";
import LoginPage from "../pages/login/login.page";
import RegisterPage from "../pages/register/register.page";
import PrivateRoutes from "./private.routes";
import PaymentConfirmationPage from "../pages/payment-confirmation/payment-confirmation.page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/category/:id" element={<CategoryDetailsPage />} />
      <Route
        path="/checkout"
        element={
          <PrivateRoutes>
            <CheckoutPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/payment-confirmation"
        element={<PaymentConfirmationPage />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRoutes;
