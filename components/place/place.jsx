import styles from "./place.module.css";
import Motion from "@/components/motion/motion";
import { restaurantContact } from "@/lib/restaurant";
import ConsentMap from "./consent-map";

export default function Place() {
  return (
    <section className={styles.place}>
      <div className="container">
        <div className="row align-items-start desc-content gap-5 gap-lg-0">
          <Motion className="col-12 col-lg-6">
            <h2 className={styles.secTitle}>Dove trovarci</h2>
            <address className={styles.address}>{restaurantContact.address}</address>
            <a className={styles.directionsLink} href={restaurantContact.directionsHref}>
              Indicazioni stradali su Google Maps
            </a>
            <ConsentMap />
          </Motion>
          <Motion className="col-12 col-lg-6">
            <h2 className={styles.secTitle}>I nostri orari</h2>
            <div className={styles.timeTables}>
              <p>
                Aperti <strong>TUTTI I GIORNI</strong>
              </p>
              <div className={styles.openingHours}>
                <div className={styles.lunch}>
                  <p className={styles.serviceTitle}>Pranzo</p>
                  <p className={styles.serviceTime}>12:00 - 14:30</p>
                </div>
                <div className={styles.dinner}>
                  <p className={styles.serviceTitle}>Cena</p>
                  <p className={styles.serviceTime}>18:00 - 23:30</p>
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
