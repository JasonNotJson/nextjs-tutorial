import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "WUAC",
  description:
    "A comprehensive homepage for the Waseda University Aviation Club (早稲田大学航空部) for managing resources and archiving daily events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="diamond_logo.png" />
      <body className="relative flex flex-col min-h-screen bg-main-bg dark:bg-dark-main-bg dark:text-white z-50">
        <main className="flex-1 flex items-center justify-center">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
