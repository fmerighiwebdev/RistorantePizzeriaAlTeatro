"use client";

import styles from "./intro.module.css";

import indoor2 from "@/assets/indoor2.webp";
import indoor3 from "@/assets/indoor3.webp";
import indoor4 from "@/assets/indoor4.webp";
import outdoor2 from "@/assets/outdoor2.webp";
import bar2 from "@/assets/bar2.webp";
import Image from "next/image";

import { useEffect, useRef } from "react";

import Motion from "@/components/motion/motion";

export default function Intro() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const Carousel = require("bootstrap/js/dist/carousel");
    const carousel = Carousel.getOrCreateInstance(carouselRef.current, {
      interval: false,
      ride: false,
    });

    return () => {
      carousel.pause();
      carousel.dispose();
    };
  }, []);

  return (
    <div className={styles.intro}>
      <div className="container">
        <div className="row align-items-center gap-4 gap-lg-0 desc-content">
          <Motion className="col-12 col-lg-6">
            <div
              ref={carouselRef}
              id="restaurant-photos"
              className="carousel slide carousel-fade shadow-lg"
              style={{ zIndex: 0 }}
              data-bs-interval="false"
              role="region"
              aria-roledescription="carosello"
              aria-label="Foto del ristorante"
              tabIndex={0}
            >
              <div className="carousel-inner" aria-live="polite" aria-atomic="true">
                <div className="carousel-item active">
                  <Image
                    src={indoor2}
                    className="d-block w-100"
                    alt="Ristorante Pizzeria Al Teatro - Foto Ristorante"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src={indoor3}
                    className="d-block w-100"
                    alt="Ristorante Pizzeria Al Teatro - Foto Ristorante"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src={indoor4}
                    className="d-block w-100"
                    alt="Ristorante Pizzeria Al Teatro - Foto Ristorante"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src={outdoor2}
                    className="d-block w-100"
                    alt="Ristorante Pizzeria Al Teatro - Foto Ristorante"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src={bar2}
                    className="d-block w-100"
                    alt="Ristorante Pizzeria Al Teatro - Foto Ristorante"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#restaurant-photos"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Foto precedente</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#restaurant-photos"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Foto successiva</span>
              </button>
            </div>
          </Motion>
          <Motion className="col-12 col-lg-6">
            <h2 className={styles.secTitle}>Benvenuti</h2>
            <p className={styles.descText}>
              Il <strong>Ristorante Pizzeria Al Teatro</strong> ti dà il
              benvenuto con calore all&apos;interno delle sue accoglienti sale,
              immergendoti in un&apos;esperienza culinaria unica! Posizionato a breve
              distanza dal vivace centro di Desenzano del Garda, offre non solo
              ambienti interni accoglienti ma anche uno spazio all&apos;aperto
              incantevole.
              <br />
              <br />
              L&apos;atmosfera è attentamente curata, creando un ambiente
              confortevole che si presta perfettamente all&apos;organizzazione di
              ritrovi aziendali e alla celebrazione di importanti eventi e
              ricorrenze insieme ad amici e parenti. Con la sua cucina che
              propone specialità uniche, il nostro ristorante si impegna a
              deliziare il palato dei suoi ospiti, offrendo un&apos;esperienza
              gastronomica indimenticabile.
            </p>
          </Motion>
        </div>
      </div>
    </div>
  );
}
