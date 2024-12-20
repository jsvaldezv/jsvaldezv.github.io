import { Outfit } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import GoogleAnalytics from "@/components/calls/GoogleAnalytics";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
    title: "Portfolio",
    description: "Jesus Valdez Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <GoogleAnalytics />
            <body className={outfit.className}>
                <ThemeProvider attribute="class" defaultTheme="light">
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
