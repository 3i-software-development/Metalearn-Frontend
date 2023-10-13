// pages/protectedRoute.js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // Kiểm tra JWT trong local storage hoặc cookie khi ứng dụng tải lại
        const user = localStorage.getItem("user");
        if (user) {
            setIsAuthenticated(true);
        }
        else {
            setIsAuthenticated(false);
        }
        if ((router.pathname === '/auth/login' || router.pathname === '/auth/signup') && isAuthenticated) {
            router.push('/');
        }
        else {
            if (!isAuthenticated) {
                router.push('/auth/login');
            }
        }
    }, [router.pathname]);

    return children;
};

export default ProtectedRoute;
