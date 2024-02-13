import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
