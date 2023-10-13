import { useRouter } from "next/router";

export const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();

    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    const checkAuth = () => {
      const user = localStorage.getItem("user");

      if (!user) {
        router.push("/login");
      } 
    };

    checkAuth();

    return <WrappedComponent {...props} />;
  };
};
