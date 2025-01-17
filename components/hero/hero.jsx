import styles from './hero.module.css';

import Image from 'next/image';

import fullLogo from '@/assets/logo-full.jpg';

export default function Hero() {
    return (
      <section className={styles.hero}>
        <Image src={fullLogo} alt="Ristorante Pizzeria Al Teatro - Logo" />
        <div className={styles.visuallyHidden}>
          <h1>Ristorante Pizzeria Al Teatro</h1>
          <p>
            Il Ristorante Pizzeria Al Teatro di Desenzano del Garda (BS) ti dà il benvenuto
            con calore all'interno delle sue accoglienti sale, immergendoti in
            un'esperienza culinaria unica!
          </p>
        </div>
      </section>
    );
}