import { Route, Routes } from "react-router-dom";

//Components
import HomePage from "../pages/home/home.page";
import LoginPage from "../pages/login/login.page";
import RegisterPage from "../pages/register/register.page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRoutes;
