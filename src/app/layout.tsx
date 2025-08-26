import "./globals.css";
import type { Metadata } from "next";
import { Toaster as Sonner } from "../components/ui/sonner";
import { TooltipProvider } from "../components/ui/tooltip";
import ReactQueryProvider from "./components/ReactQueryProvider";
import Header from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Hajj & Umrah",
  description: "Your trusted partner for Hajj and Umrah journeys.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"> 
      <body>
        <ReactQueryProvider>
          <TooltipProvider>
            <Header />
            <div
              className="relative text-white bg-fixed bg-center bg-cover"
              style={{ backgroundImage: "url('/hajj-background.jpg')" }}
            >
              <div className="min-h-screen bg-white/90 backdrop-blur-sm">
                <Sonner />
                {children}
              </div>
            </div>
            <Footer />
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
