// @ts-check

import Link from "next/link";
import { notFound } from "next/navigation";
import { CUSTOM_BOOKING_ENABLED } from "@/lib/booking-config";
import styles from "./page.module.css";

import logo from "@/assets/logo.png";
import leftArrow from "@/assets/left-arr.svg";
import Image from "next/image";
import BookingForm from "@/components/booking-form/booking-form";

/** @type {import("next").Metadata} */
export const metadata = {
  title: "Prenotazione Tavoli",
  description:
    "Prenota un tavolo al Ristorante Pizzeria Al Teatro. Scegli la data, l'orario e il numero di persone per assicurarti un posto nel nostro accogliente ristorante.",
  alternates: {
    canonical: "/booking",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Booking() {
  if (!CUSTOM_BOOKING_ENABLED) {
    notFound();
  }

  return (
    <section className={styles.bookingPage}>
      <h1 className="sr-only">Prenotazione Tavoli Ristorante Pizzeria Al Teatro</h1>
      <div className={styles.backHome}>
        <Image src={leftArrow} alt="Torna alla home" />
        <Link href="/">Home</Link>
      </div>
      <div className="container">
        <Image src={logo} alt="Ristorante Pizzeria Al Teatro - Logo" />
        <BookingForm />
      </div>
    </section>
  );
}
