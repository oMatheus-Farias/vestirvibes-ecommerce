import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

//Component
import AppRoutes from "./routes/routes";
import LoadComponent from "./components/load/load.component";

//Utilities
import ScreenSizeProvider from "./contexts/screen-size.context";
import AuthProvider from "./contexts/auth.context";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <LoadComponent />;
  }

  return (
    <BrowserRouter>
      <ScreenSizeProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ScreenSizeProvider>
    </BrowserRouter>
  );
}

export default App;
