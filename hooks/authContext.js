// authContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from "next/router";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [saveSetting, setSaveSetting] = useState({
    "Menu trái": {
      style: "default",
      size: "17",
      color: "#000000"
    },
    "Tiêu đề": {
      style: "default",
      size: "17",
      color: "#000000"
    },
    "Thông báo": {
      style: "default",
      size: "17",
      color: "#000000"
    },
    "Điều khiển": {
      style: "default",
      size: "17",
      color: "#000000"
    },
    "Nội dung chữ": {
      style: "default",
      size: "17",
      color: "#000000"
    },
    "Nội dung control": {
      style: "default",
      size: "17",
      color: "#000000"
    },
    "Nội dung kiểu cây": {
      style: "default",
      size: "17",
      color: "#000000"
    },
    "Giao diện bài viết": {
      style: "default",
      size: "17",
      color: "#000000"
    }
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Kiểm tra JWT trong local storage hoặc cookie khi ứng dụng tải lại
    const user = sessionStorage.getItem("user");
    if (user) {
      setUser(user);
      setIsAuthenticated(true);
    }
    else {
      setUser(null);
      setIsAuthenticated(false);
      router.push("/auth/login");
    }
    const saveSetting = localStorage.getItem("saveSetting");
    if (saveSetting) {
      setSaveSetting(JSON.parse(saveSetting));
    }
  }, []);

  const loginState = () => {
    // Thực hiện xác thực ở đây và nhận thông tin người dùng
    // Lưu JWT vào local storage hoặc cookie
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Xóa JWT khỏi local storage hoặc cookie
    sessionStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginState, logout, saveSetting }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
