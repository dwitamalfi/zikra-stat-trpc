import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TrpcProvider } from "../../utils/trpc-provider";
import SidebarLayout from "../../components/layouts/SidebarLayout";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dzikra Statistic App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TrpcProvider>
          <div className="flex">
          <SidebarLayout></SidebarLayout>
            <div className="main-content w-full p-10 pl-[120px]">
              {children}
            </div>
          </div>
        </TrpcProvider>
      </body>
    </html>
  );
}
