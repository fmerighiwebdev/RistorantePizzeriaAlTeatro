"use client";

import styles from "./intro-menu.module.css";

import Image from "next/image";

import menu from "@/assets/menu.webp";
import piatti1 from "@/assets/piatti1.webp";
import piatti2 from "@/assets/piatti2.webp";
import piatti3 from "@/assets/piatti3.webp";
import piatti4 from "@/assets/piatti4.webp";
import piatti5 from "@/assets/piatti5.webp";
import forkIcon from "@/assets/fork.svg";

import { useEffect } from "react";

export default function IntroMenu() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className={styles.introMenu}>
      <div className="container">
        <div className="row align-items-center gap-4 gap-md-0 desc-content">
          <div className="col-12 col-lg-6">
            <h3 className={styles.secTitle}>Dai un'occhiata al nostro menù:</h3>
            <a className={styles.menuBtn} href="/menu">
              Menu <Image src={forkIcon}></Image>
            </a>
            <p className={styles.menuText}>
              Siamo entusiasti di presentarvi un'ampia e ricercata selezione di
              menu, ciascuno con la sua caratteristica preziosa e unica. Dalla
              raffinata cucina italiana, all'esotica cucina indiana, fino alla
              tradizionale pizza, ogni piatto che offriamo è frutto di
              dedizione, amore e passione culinaria.
              <br />
              <br />
              I nostri chef lavorano con cura e attenzione per garantire che
              ogni portata sia un'autentica esperienza gastronomica. Utilizziamo
              solo ingredienti freschi e genuini, perché crediamo che la qualità
              degli ingredienti si rifletta nel sapore finale dei nostri piatti.
              <br />
              <br />
              Siamo fermamente convinti di poter superare ogni vostra
              aspettativa, offrendo un viaggio culinario che soddisfi i vostri
              gusti più raffinati. La nostra missione è quella di creare
              un'esperienza culinaria indimenticabile, dove la varietà e la
              qualità si fondono per deliziare il vostro palato in ogni boccone.
            </p>
          </div>
          <div className="col-12 col-lg-6">
            <div
              id="carouselMenuAutoplaying"
              className="carousel slide carousel-fade shadow-lg"
              style={{ zIndex: 0 }}
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image
                    src={menu}
                    className="d-block w-100"
                    alt="Ristorante Pizzeria Al Teatro - Foto Menu"
                    loading="lazy"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src={piatti1}
                    className="d-block w-100"
                    alt="Ristorante Pizzeria Al Teatro - Foto Menu"
                    loading="lazy"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src={piatti2}
                    className="d-block w-100"
                    alt="Ristorante Pizzeria Al Teatro - Foto Menu"
                    loading="lazy"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src={piatti3}
                    className="d-block w-100"
                    alt="Ristorante Pizzeria Al Teatro - Foto Menu"
                    loading="lazy"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src={piatti4}
                    className="d-block w-100"
                    alt="Ristorante Pizzeria Al Teatro - Foto Menu"
                    loading="lazy"
                  />
                </div>
                <div className="carousel-item">
                  <Image
                    src={piatti5}
                    className="d-block w-100"
                    alt="Ristorante Pizzeria Al Teatro - Foto Menu"
                    loading="lazy"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselMenuAutoplaying"
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
                data-bs-target="#carouselMenuAutoplaying"
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
        </div>
      </div>
    </div>
  );
}
