import { Roboto, Poppins, Lemon } from "next/font/google";
import "./globals.css";
import Heeader from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { Providers } from "./providers/NextUiProvider";
import { getServerSession } from "next-auth";
import SessionProvider from "@/libs/SessionProvider";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const lemon = Lemon({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lemon",
});

export const metadata = {
  title: "Jajemelo Food Ordering",
  description: "Food Ordering App",
};

export default async function RootLayout({ children }) {
  //const session = await getServerSession();

  return (
    <html lang="en" className="bg-hero-pattern bg-cover scroll-smooth" suppressHydrationWarning={true}>
      <body className={`${roboto.className} ${poppins.variable} ${lemon.variable}`}
      >
        <SessionProvider >
          <main className="mx-auto py-4 px-2">
            <Providers>
              <Heeader />
              {children}
              <Footer />
            </Providers>
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
