import { useRouter } from "next/router";
import { useAuth } from "@/hooks/authContext";
import Login from "@/pages/auth/login";
import Personalized from "@/components/Personalized/Personalized";
import { Layout } from "antd";
import Loading from "@/pages/auth/pageLoader";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth();
    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        )
        }
    if (!isAuthenticated && (router.pathname !== "/auth/signup" && router.pathname !== "/")) {
        return (
            <Login />
        )
    }
    if (isAuthenticated && (router.pathname === "/auth/signup" || router.pathname === "/auth/login")) {
        return (
            <Personalized />
        )
    }
    return children

};

export default ProtectedRoute;
