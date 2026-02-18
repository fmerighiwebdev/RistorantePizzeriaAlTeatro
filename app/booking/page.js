import Link from "next/link";
import styles from "./page.module.css";

import logo from "@/assets/logo.png";
import leftArrow from "@/assets/left-arr.svg";
import Image from "next/image";
import BookingForm from "@/components/booking-form/booking-form";

export const metadata = {
  title: "Prenotazione Tavoli",
  description:
    "Prenota un tavolo al Ristorante Pizzeria Al Teatro. Scegli la data, l'orario e il numero di persone per assicurarti un posto nel nostro accogliente ristorante.",
};

export default function Booking() {
  return (
    <section className={styles.bookingPage}>
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
