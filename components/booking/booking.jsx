import styles from "./booking.module.css";

import Motion from "@/components/motion/motion";
import { restaurantContact } from "@/lib/restaurant";
import Script from "next/script";

export default function Booking() {
  return (
    <section className={styles.booking}>
      <Motion className="container">
        <h2>Prenota il tuo tavolo</h2>
        <p>
          Che tu stia pianificando una cena romantica, una serata tra amici o un
          pranzo di lavoro, siamo qui per offrirti un&apos;esperienza culinaria
          indimenticabile. <br /> Compila il modulo, scegli il giorno e
          l&apos;orario che preferisci: il nostro staff sarà pronto ad
          accoglierti con il sorriso e la qualità che ci contraddistinguono.
        </p>
        <a href={restaurantContact.phoneHref}>
          Prenota per telefono: {restaurantContact.phone}
        </a>
        <div id="quandoo-booking-widget" />
        <Script
          id="quandoo-booking-script"
          src="https://booking-widget.quandoo.com/index.js"
          strategy="afterInteractive"
          data-merchant-id="109865"
          data-theme="brand"
        />
      </Motion>
    </section>
  );
}
