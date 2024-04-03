// Dependencies
import { Inter } from "next/font/google";

// Styles
import "./globals.css";

// Components
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Keerthivasan - Frontend Developer",
  description: "Keerthivasan's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="py-5 px-16 relative min-h-[80vh] flex">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
