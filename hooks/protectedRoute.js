import { useRouter } from "next/router";
import { useAuth } from "@/hooks/authContext";
import Login from "@/pages/auth/login";
import Personalized from "@/components/Personalized/Personalized";
import { Layout } from "antd";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated && (router.pathname === "/auth/signup" || router.pathname === "/auth/login")) {
    return <Personalized />;
  } else if (!isAuthenticated && (router.pathname !== "/auth/signup" && router.pathname !== "/auth/login")) {
    return <Login />;
  } else {
    // If none of the conditions match, you might want to return a "Not Found" page or something else.
    // For simplicity, I'm returning an empty component in this example.
    return children;
  }
};

export default ProtectedRoute;
