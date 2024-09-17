import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
export const metadata: Metadata = {
  title: "Dammar.dev",
  description: "Protfolio website",
  keywords: "developer, frontend, backend, node.js react.js express.js"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full overflow-x-hidden dark:bg-slate-900 bg-[#f4f4f4] dark:text-[#f4f4f4] text-slate-700 md:px-8 p-2">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
