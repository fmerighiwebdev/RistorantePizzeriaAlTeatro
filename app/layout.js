import Header from "@/components/header/header";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import Maintenance from "@/components/maintenance/maintenance";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: {
    default: "Ristorante Pizzeria Al Teatro - Desenzano del Garda (BS)",
    template: "%s | Ristorante Pizzeria Al Teatro",
  },
  description:
    "Il Ristorante Pizzeria Al Teatro di Desenzano del Garda (BS) ti dà il benvenuto con calore all'interno delle sue accoglienti sale, immergendoti in un'esperienza culinaria unica!",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  },
  manifest: "/site.webmanifest",
};


export default function RootLayout({ children }) {
  const isMaintenance = false;

  return (
    <html lang="it">
      <head>
        <Script
          src={`https://cdn-cookieyes.com/client_data/3ebf5a2df9be8cd9fce2562a/script.js`}
          strategy="beforeInteractive"
        ></Script>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Al Teatro" />
      </head>
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
