"use client";

import { useState } from "react";
import styles from "./place.module.css";

export default function Place() {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    if (window.CookieConsent) {
      const consent = window.CookieConsent.getConsent();
      const hasGoogleMapsConsent =
        consent &&
        consent.given &&
        consent.services.includes(
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.066447014368!2d10.540888176028188!3d45.46846537107414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781945b6092db91%3A0x11159a6aae5fae7b!2sRistorante%20Bar%20Pizzeria%20Al%20Teatro!5e0!3m2!1sit!2sit!4v1689939009832!5m2!1sit!2sit"
        );
      setHasConsent(hasGoogleMapsConsent);
    }

    loadMap();
  }, []);

  function loadMap() {
    if (hasConsent) {
      setIsMapVisible(true);
    } else {
      setIsMapVisible(false);
    }
  }

  return (
    <section className={styles.place}>
      <div className="container">
        <div className="row align-items-start desc-content">
          <div className="col-12 col-lg-6">
            <div className={styles.mapContainer}>
              {isMapVisible ? (
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.066447014368!2d10.540888176028188!3d45.46846537107414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781945b6092db91%3A0x11159a6aae5fae7b!2sRistorante%20Bar%20Pizzeria%20Al%20Teatro!5e0!3m2!1sit!2sit!4v1689939009832!5m2!1sit!2sit"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                  loading="lazy"
                ></iframe>
              ) : (
                <div className={styles.nocookieText}>
                  <p>Errore nel caricamento del widget Google Maps.</p>
                </div>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h3 className={styles.secTitle}>I nostri orari</h3>
            <div className={styles.timetables}>
              <div className={styles.lunch}>
                <p>
                  Aperti <strong>TUTTI I GIORNI</strong>
                </p>
                <p className={styles.serviceTitle}>Orario - Pranzo</p>
                <p>
                  <strong>11.30 - 15.30</strong>
                </p>
              </div>
              <div className={styles.dinner}>
                <p>
                  Aperti <strong>TUTTI I GIORNI</strong>
                </p>
                <p className={styles.serviceTitle}>Orario - Cena</p>
                <p>
                  <strong>18.00 - 23.30</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
