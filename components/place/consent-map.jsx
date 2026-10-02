"use client";

import { useSyncExternalStore } from "react";
import styles from "./place.module.css";

function getMapConsent() {
  return (
    typeof window.getCkyConsent === "function" &&
    window.getCkyConsent()?.categories?.functional === true
  );
}

function getServerConsent() {
  return false;
}

function subscribeToConsent(onChange) {
  document.addEventListener("cookieyes_banner_load", onChange);
  document.addEventListener("cookieyes_consent_update", onChange);

  return () => {
    document.removeEventListener("cookieyes_banner_load", onChange);
    document.removeEventListener("cookieyes_consent_update", onChange);
  };
}

export default function ConsentMap() {
  const isMapVisible = useSyncExternalStore(
    subscribeToConsent,
    getMapConsent,
    getServerConsent
  );

  return (
    <div className={styles.mapContainer}>
      {isMapVisible ? (
        <iframe
          title="Google Maps: Ristorante Pizzeria Al Teatro"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.066447014368!2d10.540888176028188!3d45.46846537107414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781945b6092db91%3A0x11159a6aae5fae7b!2sRistorante%20Bar%20Pizzeria%20Al%20Teatro!5e0!3m2!1sit!2sit!4v1689939009832!5m2!1sit!2sit"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
        />
      ) : (
        <div className={styles.noCookieText}>
          <p>
            La mappa interattiva richiede il consenso ai cookie funzionali.
            L&apos;indirizzo e il link alle indicazioni sono sempre disponibili.
          </p>
        </div>
      )}
    </div>
  );
}
