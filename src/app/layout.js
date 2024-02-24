import { Inter } from "next/font/google";
import "./globals.css";
import Authprovider from "@/authprovidert/AuthProvider";
// import { AuthContext } from "@/authprovidert/AuthProvider";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       {/* <QueryClientProvider client={queryClient}> */}
      <Authprovider>
      <body className={inter.className}>{children}</body>
      </Authprovider>
      {/* </QueryClientProvider> */}
    </html>
  );
}
