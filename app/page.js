import Hero from "@/components/hero/hero";

import styles from "./page.module.css";

import Intro from "@/components/intro/intro";
import IntroMenu from "@/components/intro-menu/intro-menu";
import Place from "@/components/place/place";
import Booking from "@/components/booking/booking";

export const metadata = {
  canonicals: "https://www.ristorantealteatro.it",
}

export default function Home() {
  return (
    <>
      <Hero />
      <section className={styles.introSection}>
        <Intro />
        <IntroMenu />
      </section>
      <Place />
      <Booking />
    </>
  );
}
