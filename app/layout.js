import Header from "@/components/header/header";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import Maintenance from "@/components/maintenance/maintenance";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Ristorante Pizzeria Al Teatro - Desenzano del Garda (BS)",
  description:
    "Il Ristorante Pizzeria Al Teatro di Desenzano del Garda (BS) ti dà il benvenuto con calore all'interno delle sue accoglienti sale, immergendoti in un'esperienza culinaria unica!",
};

export default function RootLayout({ children }) {
  const isMaintenance = false;

  return (
    <html lang="it">
      <Script
        src={`https://cdn-cookieyes.com/client_data/3ebf5a2df9be8cd9fce2562a/script.js`}
      ></Script>
      <body>
        {isMaintenance ? (
          <Maintenance />
        ) : (
          <>
            <Header />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
