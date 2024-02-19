import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

//Component
import AppRoutes from "./routes/routes";
import LoadComponent from "./components/load/load.component";

//Utilities
import ScreenSizeProvider from "./contexts/screen-size.context";
import AuthProvider from "./contexts/auth.context";
import CategoriesProvider from "./contexts/categories.context";
import CartProvider from "./contexts/cart.context";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    AOS.init();
  }, []);

  if (loading) {
    return <LoadComponent />;
  }

  return (
    <BrowserRouter>
      <ScreenSizeProvider>
        <AuthProvider>
          <CategoriesProvider>
            <CartProvider>
              <AppRoutes />
            </CartProvider>
          </CategoriesProvider>
        </AuthProvider>
      </ScreenSizeProvider>
    </BrowserRouter>
  );
}

export default App;
