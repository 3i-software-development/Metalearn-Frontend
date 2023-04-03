import "@/styles/globals.css";
import Layout from "@/layout/Layout";
import { useEffect, useState, useContext } from "react";
// import { createContext } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

// const AppContext = createContext();

export default function App({ Component, pageProps }) {
  return (
<Layout><Component {...pageProps} /></Layout>
  
      

  )
}

// export function useApppContext() {
//   return useContext(AppContext);
// }
