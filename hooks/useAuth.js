import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function useAuth() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  function checkUserIsAuthenticated() {
    const user = sessionStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  }
  useEffect(() => {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa trên phía client
    const userIsAuthenticated = checkUserIsAuthenticated();
    if (!userIsAuthenticated) {
      // Nếu người dùng chưa đăng nhập, redirect tới trang đăng nhập
      // router.push("/auth/login");
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  return isAuthenticated;
}

export default useAuth;
