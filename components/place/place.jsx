"use client";

import { useState, useEffect } from "react";
import styles from "./place.module.css";

export default function Place() {
  const [isMapVisible, setIsMapVisible] = useState(false);

  useEffect(() => {
    // Function to check user consent from the cookie
    const checkConsent = () => {
      console.log("Cookies: ", document.cookie);

      if (typeof window !== "undefined" && document.cookie) {
        const cookies = document.cookie.split("; ");
        const consentCookie = cookies.find((cookie) =>
          cookie.startsWith("cookieyes-consent")
        );

        console.log("Consent Cookie: ", consentCookie);

        if (consentCookie) {
          const consentData = consentCookie.split("=")[1]; // Extract the consent data value
          console.log("Consent Data: ", consentData);
          // Parse the consentData manually
          const consentObj = consentData.split(",").reduce((acc, item) => {
            const [key, value] = item.split(":");
            acc[key.trim()] = value.trim();
            return acc;
          }, {});

          console.log("Parsed Consent Object: ", consentObj);

          // Check if the 'functional' consent is 'yes'
          if (consentObj.consent === "yes") {
            setIsMapVisible(true); // Show the map
          } else {
            setIsMapVisible(false); // Hide the map
          }
        }
      }
    };

    // Run checkConsent when the component mounts
    checkConsent();
  }, []);

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
