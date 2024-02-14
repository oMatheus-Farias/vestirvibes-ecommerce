import { BrowserRouter } from "react-router-dom";

//Component
import AppRoutes from "./routes/routes";

//Utilities
import ScreenSizeProvider from "./contexts/screen-size.context";
import AuthProvider from "./contexts/auth.context";

function App() {
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
