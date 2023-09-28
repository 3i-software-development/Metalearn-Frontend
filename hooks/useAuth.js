import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function useAuth() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function checkUserIsAuthenticated() {
    const user = sessionStorage.getItem("user");
    return !!user; // Sử dụng toán tử !! để chuyển đổi giá trị thành boolean
  }

  useEffect(() => {
    const userIsAuthenticated = checkUserIsAuthenticated();
    if (!userIsAuthenticated) {
      // Nếu người dùng chưa đăng nhập, redirect tới trang đăng nhập
      router.push("/auth/login");
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  function logout() {
    sessionStorage.removeItem("user");
    setIsAuthenticated(false);
    router.push("/auth/login"); // Chuyển hướng đến trang đăng nhập sau khi đăng xuất
  }

  return { isAuthenticated, logout };
}

export default useAuth;
