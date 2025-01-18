"use client";

import styles from "./intro.module.css";

import indoor2 from "@/assets/indoor2.webp";
import indoor3 from "@/assets/indoor3.webp";
import indoor4 from "@/assets/indoor4.webp";
import outdoor2 from "@/assets/outdoor2.webp";
import bar2 from "@/assets/bar2.webp";
import Image from "next/image";

import { useEffect } from "react";

export default function Intro() {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

  return (
    <div className={styles.intro}>
      <div className="container">
          <div className="row align-items-center gap-4 gap-lg-0 desc-content">
            <div className="col-12 col-lg-6">
              <div
                id="carouselExampleAutoplaying"
                className="carousel slide carousel-fade shadow-lg"
                style={{ zIndex: 0 }}
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
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
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <h2 className={styles.secTitle}>Benvenuti</h2>
              <p className={styles.descText}>
                Il <strong>Ristorante Pizzeria Al Teatro</strong> ti dà il benvenuto
                con calore all'interno delle sue accoglienti sale, immergendoti in
                un'esperienza culinaria unica! Posizionato a breve distanza dal
                vivace centro di Desenzano del Garda, offre non solo ambienti interni accoglienti
                ma anche uno spazio all'aperto incantevole.
                <br />
                <br />
                L'atmosfera è attentamente curata, creando un ambiente confortevole
                che si presta perfettamente all'organizzazione di ritrovi aziendali
                e alla celebrazione di importanti eventi e ricorrenze insieme ad
                amici e parenti. Con la sua cucina che propone specialità uniche, il
                nostro ristorante si impegna a deliziare il palato dei suoi ospiti,
                offrendo un'esperienza gastronomica indimenticabile.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
}