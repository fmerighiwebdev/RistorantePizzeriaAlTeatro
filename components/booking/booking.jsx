"use client";

import Link from "next/link";
import styles from "./booking.module.css";

import { motion } from "framer-motion";

export default function Booking() {
  return (
    <section className={styles.booking}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring" }}
        className="container"
      >
        <h3>Prenota il tuo tavolo</h3>
        <p>
          Che tu stia pianificando una cena romantica, una serata tra amici o un
          pranzo di lavoro, siamo qui per offrirti un&apos;esperienza culinaria
          indimenticabile. <br /> Compila il modulo, scegli il giorno e
          l&apos;orario che preferisci: il nostro staff sarà pronto ad
          accoglierti con il sorriso e la qualità che ci contraddistinguono.
        </p>
        <Link href="/booking">Prenota ora!</Link>
      </motion.div>
    </section>
  );
}
