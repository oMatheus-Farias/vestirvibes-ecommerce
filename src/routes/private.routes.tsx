import { ReactNode, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Component
import RedirectComponent from "../components/redirect/redirect.component";

//Utilities
import { AuthContext } from "../contexts/auth.context";

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  const { signed } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!signed) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, []);

  if (!signed) {
    return <RedirectComponent />;
  }

  return <>{children}</>;
};

export default PrivateRoutes;
