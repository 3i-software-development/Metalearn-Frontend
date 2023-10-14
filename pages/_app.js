import "@/styles/globals.css";
import Layout from "@/layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "@/lib/Redux/store";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AuthProvider, useAuth } from "@/hooks/authContext";
import Login from "@/pages/auth/login";
import ProtectedRoute from "@/hooks/protectedRoute";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  const { isFallback, events } = useRouter();

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "vi",
        includedLanguages: "vi,th,en,fr,ja,zh-CN,ko,lo,km",
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    const id = "google-translate-script";

    const addScript = () => {
      const s = document.createElement("script");
      s.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      s.setAttribute("id", id);
      const q = document.getElementById(id);
      if (!q) {
        document.body.appendChild(s);
        window.googleTranslateElementInit = googleTranslateElementInit;
      }
    };

    const translateIcon = document.querySelector(".goog-te-gadget-icon");
    if (translateIcon) {
      translateIcon.setAttribute("alt", "Google Translate");
    }

    const removeScript = () => {
      const q = document.getElementById(id);
      if (q) q.remove();
      const w = document.getElementById("google_translate_element");
      if (w) w.innerHTML = "";
    };

    isFallback || addScript();

    events.on("routeChangeStart", removeScript);
    events.on("routeChangeComplete", addScript);

    return () => {
      events.off("routeChangeStart", removeScript);
      events.off("routeChangeComplete", addScript);
    };
  }, []);


  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Layout>
            <ProtectedRoute>
              <Component {...pageProps} />
            </ProtectedRoute>
          </Layout>
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  );
}
